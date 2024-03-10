import {useAppDispatch, useAppSelector} from '@hooks';

import {setLanguages, setTemperature} from '@redux/slices/settingsSlice';

export const useAppSettings = () => {
  const dispatch = useAppDispatch();

  const {languages, temperature} = useAppSelector(state => state.settings);

  const dispatchSetLanguages = async (lang: string) => {
    await dispatch(setLanguages(lang));
  };

  const dispatchSetTemperature = async (temp: string) => {
    await dispatch(setTemperature(temp));
  };

  return {
    languages,
    temperature,

    dispatchSetLanguages,
    dispatchSetTemperature,
  };
};
