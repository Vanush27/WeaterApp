import {useAppDispatch, useAppSelector} from '@hooks';

import {ICountryListWeather} from '../types/Weather';

import {
  addCountry,
  deleteCountry,
  setCurrentCountryItem,
} from '@redux/slices/weatherSlice';

export const useWeather = () => {
  const dispatch = useAppDispatch();
  const {countryListWeather, currentWeather} = useAppSelector(
    state => state.weather,
  );

  const createNewCountry = async (currentCountryItem: ICountryListWeather) => {
    dispatch(addCountry(currentCountryItem));
    dispatch(setCurrentCountryItem(currentCountryItem));
  };

  const handleDeleteCountry = (city: string) => {
    dispatch(deleteCountry(city));
  };

  const setCurrentCountry = async (currentCountryItem: ICountryListWeather) => {
    dispatch(setCurrentCountryItem(currentCountryItem));
  };

  //todo cycle dynamic

  // const cycle = () => {
  // let filteredByNextDay;
  //   let day = moment().add(1, 'days').format('DD');
  //   console.log(day, 'dayday');
  //
  //   for (let i = 1; i < 7; i++) {
  //     let d = moment().add(i, 'days').format('DD');
  //     filteredByNextDay = getCountryListByDay(currentWeather, d);
  //     return filteredByNextDay;
  //   }
  // };
  // cycle();

  return {
    countryListWeather,
    createNewCountry,
    handleDeleteCountry,
    currentWeather,
    setCurrentCountry,
  };
};
