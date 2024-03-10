import AsyncStorage from '@react-native-async-storage/async-storage';
import {LanguageDetectorAsyncModule} from 'i18next';
import {LOCALE_PERSISTENCE_KEY} from '@constants';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  // init: async () => {},
  detect: async (language: any) => {
    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);

    if (!persistedLocale) {
      return language('en');
    }
    language(persistedLocale);
  },

  cacheUserLanguage: async locale => {
    await AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  },
};

export default languageDetector;
