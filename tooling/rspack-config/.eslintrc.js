const { jsTsGlobs } = require('@philaf/eslint-config/globs');

module.exports = {
	extends: ['@philaf/eslint-config/react'],
	overrides: [
		{
			files: jsTsGlobs,
			rules: {
				'no-console': 'off',
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
