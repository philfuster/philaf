import path from 'node:path';
import { fileURLToPath } from 'node:url';
import makeRspackConfig from '@philaf/rspack-config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @typedef {import('@rspack/cli').Configuration} RspackConfiguration */

/**
 * Export an rspack configuration
 * @param {Record<string, any>} [env]
 * @returns {RspackConfiguration}
 * @example
 * // regular build
 * rspack
 * @example
 * // dev server
 * rspack serve --env useDevServer=true --env port=4000
 */
function rsPackConfig(env) {
	const { useDevServer: useDevServerEnv, port: devServerPort } = env ?? {};
	const useDevServer = useDevServerEnv === 'true';

	const name = 'blog';
	const tsConfigPath = path.resolve(dirname, 'src', 'tsconfig.json');
	const devServerOptions = 'https';

	const baseConfig = makeRspackConfig({
		name,
		useDevServer,
		tsConfigPath,
		devServerPort,
		devServerOptions,
	});

	baseConfig.builtins.copy = {
		patterns: [],
	};

	return baseConfig;
}

export default rsPackConfig;
