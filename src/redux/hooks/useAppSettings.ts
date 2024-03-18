import {useAppDispatch, useAppSelector} from '@hooks';

import {
  setLanguages,
  setTemperature,
  setThemeVariant,
} from '@redux/slices/settingsSlice';
import {ThemeStats} from '@ui-modules';

export const useAppSettings = () => {
  const dispatch = useAppDispatch();

  const {languages, temperature, themeStats} = useAppSelector(
    state => state.settings,
  );

  const dispatchSetLanguages = (lang: string) => {
    dispatch(setLanguages(lang));
  };

  const dispatchSetTemperature = (temp: string) => {
    dispatch(setTemperature(temp));
  };

  const dispatchSetTheme = (themes: ThemeStats) => {
    dispatch(setThemeVariant(themes));
  };

  return {
    languages,
    temperature,
    themeStats,

    dispatchSetLanguages,
    dispatchSetTemperature,
    dispatchSetTheme,
  };
};
