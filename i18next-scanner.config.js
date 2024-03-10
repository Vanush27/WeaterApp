module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  options: {
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: [],
    },

    lngs: ['en', 'ru'],
    ns: ['resource'],
    defaultLng: 'en',
    defaultNs: 'resource',
    // to distinguish if the text is translated or not
    defaultValue: (lng, ns, key) => (lng === 'en' ? key : `__${key}__`),
    resource: {
      loadPath: 'src/i18n/{{lng}}/{{ns}}.json',
      savePath: 'src/i18n/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
