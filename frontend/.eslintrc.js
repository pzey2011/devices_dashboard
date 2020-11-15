module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:jest/recommended',
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react",
    'airbnb',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
		'react/jsx-props-no-spreading': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'no-use-before-define': 'off',
		'no-unused-vars': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'no-param-reassign': [2, { props: false }],
		'jsx-a11y/anchor-is-valid': 'off',
		'react/prefer-stateless-function': 'off',
		'react/static-property-placement': 'off',
		camelcase: 'off',
		'jsx-a11y/no-autofocus': 'off',
		'no-tabs': 'off',
		indent: [
			'error',
			'tab',
		],
		'max-len': 'off',
		'react/jsx-indent': [
			2,
			'tab',
		],
		'react/jsx-indent-props': [
			2,
			'tab',
		],
		'object-curly-newline': 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
		],
		'import/prefer-default-export': 'off',
		'react/jsx-one-expression-per-line': 'off',
    "no-mixed-spaces-and-tabs": 0,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
