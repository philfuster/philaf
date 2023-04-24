module.exports = {
	env: { browser: true, es2020: true },
	extends: ['@philaf/eslint-config/react'],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: [],
	settings: {
		'import/resolver': {
			typescript: {
				project: ['./tsconfig.json', './src/tsconfig.json'],
			},
		},
	},
};
