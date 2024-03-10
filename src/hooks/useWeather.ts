import {useAppDispatch, useAppSelector} from '@hooks';

import moment from 'moment/moment';
// TODO
import {ICountryListWeather} from '../types/Weather';
import {THOUSAND} from '@constants';

import {addCountry, setCurrentCountryItem} from '@redux/slices/weatherSlice';

export const useWeather = () => {
  const dispatch = useAppDispatch();
  const {countryListWeather} = useAppSelector(state => state.weather);
  const {currentWeather} = useAppSelector(state => state.weather);

  const createNewCountry = async (currentCountryItem: ICountryListWeather) => {
    await dispatch(addCountry(currentCountryItem));
    await dispatch(setCurrentCountryItem(currentCountryItem));
  };

  const setCurrentCountry = async (currentCountryItem: ICountryListWeather) => {
    await dispatch(setCurrentCountryItem(currentCountryItem));
  };

  const currentDay = moment().format('DD');

  const date = new Date();
  const seconds = date.getTime() / THOUSAND;
  const getWeatherDetails = (currentDetailWeather, currentDayFoSec) => {
    return currentDetailWeather?.list?.reduce(function (prev, curr) {
      return Math.abs(curr - currentDayFoSec) < Math.abs(prev - currentDayFoSec)
        ? curr
        : prev;
    });
  };
  const weatherDetails = getWeatherDetails(currentWeather, seconds);

  const getCountryListByDay = (countryListWeatherDa, currentDays) => {
    return countryListWeatherDa?.list?.filter(
      item => moment(item.dt_txt).format('DD').toString() === currentDays,
    );
  };
  const filteredByCurrentDay = getCountryListByDay(currentWeather, currentDay);

  // todo use proper structure , remove this
  const day1 = moment().add(1, 'days').format('DD');
  const day2 = moment().add(2, 'days').format('DD');
  const day3 = moment().add(3, 'days').format('DD');
  const day4 = moment().add(4, 'days').format('DD');
  const day5 = moment().add(5, 'days').format('DD');
  const day6 = moment().add(6, 'days').format('dd');

  const filteredByNextDay1 = getCountryListByDay(currentWeather, day1);
  const filteredByNextDay2 = getCountryListByDay(currentWeather, day2);
  const filteredByNextDay3 = getCountryListByDay(currentWeather, day3);
  const filteredByNextDay4 = getCountryListByDay(currentWeather, day4);
  const filteredByNextDay5 = getCountryListByDay(currentWeather, day5);
  const filteredByNextDay6 = getCountryListByDay(currentWeather, day6);

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
    filteredByCurrentDay,
    currentWeather,
    setCurrentCountry,
    weatherDetails,

    filteredByNextDay1,
    filteredByNextDay2,
    filteredByNextDay3,
    filteredByNextDay4,
    filteredByNextDay5,
    filteredByNextDay6,
  };
};
