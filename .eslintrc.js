module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  extends: [
    '@react-native',
    '@react-native-community',
    'plugin:i18next/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'i18next',
    'react-i18n',
    'react',
    'react-native',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': ['warn'],
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-shadow': ['error'],
        'react-hooks/exhaustive-deps': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        'i18next/no-literal-string': 2,
        'react/display-name': 'off',

        'react/jsx-sort-props': [
          'warn',
          {
            callbacksLast: true,
            shorthandFirst: false,
            shorthandLast: true,
            multiline: 'last',
            ignoreCase: true,
            noSortAlphabetically: false,
          },
        ],

        /** react styles  */
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,

        /** react-i18n */
        'react-i18n/no-missing-interpolation-keys': 'error',
      },
    },
  ],

};
