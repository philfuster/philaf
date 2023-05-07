import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlRspackPluginDefault from '@rspack/plugin-html';

/** @typedef {import('@rspack/cli').Configuration} RspackConfiguration */

/**
 * @typedef DevServerConfigOptions
 * @property {boolean} [useDevServer] - Launch the development server
 * @property {NonNullable<RspackConfiguration['devServer']>['port']} [devServerPort] - Port to bind to the development server
 * @property {NonNullable<RspackConfiguration['devServer']>['server']} [devServerOptions] - Value for devServer.server configuration
 */

/**
 * @typedef DevServerConfigResult
 * @property {RspackConfiguration['devServer']} devServer
 * @property {RspackConfiguration['cache']} cache
 */

/**
 * Generate the dev server configuration options
 * @param {DevServerConfigOptions} opts
 * @returns {Partial<DevServerConfigResult>}
 */
function buildDevServerConfig(opts) {
	const { useDevServer, devServerPort, devServerOptions } = opts;

	if (!useDevServer) {
		return {};
	}

	if (devServerPort == null) {
		throw new Error('Cannot use dev server without defining a port!');
	}

	return {
		devServer: {
			hot: true,
			historyApiFallback: true,
			host: '0.0.0.0',
			port: devServerPort,
			allowedHosts: 'all',
			client: { overlay: { runtimeErrors: false } },
			...(devServerOptions != null && { server: devServerOptions }),
		},

		cache: true,
	};
}

/**
 * @typedef Options
 * @property {string} name - Name of application being built
 * @property {boolean} useDevServer - Launch the development server
 * @property {NonNullable<RspackConfiguration['resolve']>['tsConfigPath']} tsConfigPath - Path to tsconfig file used for resolution of baseUrl and paths
 * @property {NonNullable<RspackConfiguration['devServer']>['port']} [devServerPort] - Port to bind to the development server
 * @property {NonNullable<RspackConfiguration['devServer']>['server']} [devServerOptions] - Value for devServer.server configuration
 * @property {NonNullable<RspackConfiguration['builtins']>['define']} [definitions] - Defines builtin definitions
 */

/** @typedef {'builtins' | 'devtool' | 'entry' | 'mode' | 'name' | 'optimization' | 'output' | 'plugins' | 'resolve' | 'target'} RequiredBaseProperties */

/**
 * Generate an rspack configuration
 * @param {Options} opts
 * @returns {import('ts-essentials').MarkRequired<RspackConfiguration, RequiredBaseProperties>}
 */
function makeRspackConfig(opts) {
	const { name, useDevServer, tsConfigPath, devServerPort, devServerOptions, definitions } = opts;

	const cwd = process.cwd();

	const { NODE_ENV: environment = 'production' } = process.env;

	const isDev = environment !== 'production';

	/** @type {RspackConfiguration['mode']} */
	const mode = isDev ? 'development' : 'production';

	/** @type {RspackConfiguration['entry']} */
	const entry = path.resolve(cwd, 'src', 'index.tsx');

	/** @type {RspackConfiguration['output']} */
	const output = {
		path: path.resolve(cwd, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/',
	};

	/** @type {RspackConfiguration['target']} */
	const target = 'browserslist';

	/** @type {RspackConfiguration['optimization']} */
	const optimization = {
		minimize: !useDevServer,
		splitChunks: {
			chunks: 'all',
		},
	};

	/** @type {NonNullable<RspackConfiguration['builtins']>['pluginImport']} */
	const pluginImport = [
		{
			libraryName: '@philaf/app_common.components',
			customName: '@philaf/app_common.components/src/{{ member }}',
			transformToDefaultImport: false,
		},
	];

	/** @type {RspackConfiguration['builtins']} */
	const builtins = {
		presetEnv: {},
		define: {
			__DEV__: JSON.stringify(isDev),
			...definitions,
		},
		react: {
			runtime: 'automatic',
			development: useDevServer,
			refresh: useDevServer,
		},
		pluginImport,
	};

	/** @type {RspackConfiguration['resolve']} */
	const resolve = {
		tsConfigPath,
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	};

	/** @type {RspackConfiguration['devtool']} */
	const devtool = 'source-map';

	const devServerConfig = buildDevServerConfig({
		useDevServer,
		devServerPort,
		devServerOptions,
	});

	// This is necessary because the plugin is only providing a simulated default export
	// See issue logged at: https://github.com/web-infra-dev/rspack/issues/2851
	const { default: HtmlRspackPlugin } = HtmlRspackPluginDefault;

	const dirname = path.dirname(fileURLToPath(import.meta.url));
	/** @type {RspackConfiguration['plugins']} */
	const plugins = [
		new HtmlRspackPlugin({
			filename: 'index.html',
			template: path.resolve(dirname, 'static', 'index.html'),
			favicon: path.resolve(dirname, 'static', 'favicon.ico'),
		}),
	];

	if (useDevServer && definitions != null) {
		console.log('Dev Server Environment:\n');
		Object.entries(definitions).forEach(([key, value]) => {
			console.log(`${key}: ${value}`);
		});
		console.log('\n');
	}

	return {
		name,
		mode,
		entry,
		output,
		target,
		optimization,
		builtins,
		resolve,
		devtool,
		plugins,
		...devServerConfig,
	};
}

export default makeRspackConfig;
