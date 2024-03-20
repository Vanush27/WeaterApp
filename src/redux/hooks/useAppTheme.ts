import {useEffect} from 'react';

import {Appearance} from 'react-native';
import {useAppDispatch, useAppSelector} from '@hooks';

// import {STORAGE_ITEMS} from '@redux/appSettings/appSettingsTypes';
// import {useAppSettings} from '@redux/appSettings/useAppSettings';

import {setThemeVariant} from '@redux/slices/settingsSlice';
import {ThemeStats} from '@ui-modules';
import {createSelector} from 'reselect';

export const useAppTheme = () => {
  const dispatch = useAppDispatch();

  const {themeStats} = useAppSelector(state => state.settings);

  const isDarkMode = themeStats === ThemeStats.DARK;

  // const getCachedTheme = async () => {
  //   // const storedTheme = await themeGetStorageItem();
  //   // if (storedTheme === null) {
  //   //   updateStorageItem(ThemeStats);
  //   //   const phoneTheme = Appearance.getColorScheme();
  //   //   if (phoneTheme) {
  //   //     dispatchSetTheme(phoneTheme as ThemeStats);
  //   //   } else {
  //   //     dispatchSetTheme(ThemeStats.LIGHT);
  //   //   }
  //   // }
  // };

  // useEffect(() => {
  //   getCachedTheme();
  // }, []);

  return {isDarkMode};
};
