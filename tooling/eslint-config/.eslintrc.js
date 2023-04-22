const { jsTsGlobs } = require('./globs');

module.exports = {
	extends: ['./nodejs'],
	overrides: [
		{
			files: jsTsGlobs,
			rules: {
				'global-require': 'off',
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
