import {useEffect} from 'react';

import {useTranslation} from 'react-i18next';
import {LOCALE_PERSISTENCE_KEY} from '@constants';
import {useAsyncStorage} from './useAsyncStorage';

export const useAppTranslation = () => {
  const {t, i18n} = useTranslation();
  const {getItem, setItem} = useAsyncStorage();

  const changeLng = async (lng: string) => {
    return await i18n.changeLanguage(lng);
  };

  useEffect(() => {
    getItem(LOCALE_PERSISTENCE_KEY).then(value => {
      if (value === i18n.language) {
        setItem(LOCALE_PERSISTENCE_KEY, value);
      } else {
        console.log('error');
      }
    });
  });

  return {i18n, t, changeLng};
};
