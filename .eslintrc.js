module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
	},
};
