module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'jquery': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'js': true
		}
	},
	'rules': {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};
