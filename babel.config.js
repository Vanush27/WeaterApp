module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  sourceMaps: process.env.NODE_ENV === 'development',
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env.dev',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],

    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.native.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@types/*': './src/types/*',
          '@assets/*': './src/assets/*',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@components/*': './src/components/*',
          '@navigators': './src/navigators',
          '@i18n': './src/i18n',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@ui-modules': './src/ui-modules',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
