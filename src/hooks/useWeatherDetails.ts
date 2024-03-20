import {useWeather} from '@hooks';
import {day1, day2, day3, day4, day5, day6} from '@utils/convertDay';
import {findMinMaxTemperatures} from '@utils/convertDay';
import moment from 'moment';

export const useWeatherDetail = ({list}: any) => {
  const {currentWeather} = useWeather();

  const currentDay = moment().format('DD');

  const getWeatherDetails = currentDayFoSec => {
    return list?.reduce(function (prev, curr) {
      return Math.abs(curr - currentDayFoSec) < Math.abs(prev - currentDayFoSec)
        ? curr
        : prev;
    });
  };

  const getCountryListByDay = currentDays => {
    return list?.filter(
      item => moment(item.dt_txt).format('DD').toString() === currentDays,
    );
  };

  const weatherDetails = getWeatherDetails(currentWeather);
  const filteredByCurrentDay = getCountryListByDay(currentDay);

  const filteredByNextDay1 = getCountryListByDay(day1);
  const filteredByNextDay2 = getCountryListByDay(day2);
  const filteredByNextDay3 = getCountryListByDay(day3);
  const filteredByNextDay4 = getCountryListByDay(day4);
  const filteredByNextDay5 = getCountryListByDay(day5);
  const filteredByNextDay6 = getCountryListByDay(day6);

  const {maxTempMax: maxTempMax1, minTempMin: minTempMin1} =
    findMinMaxTemperatures(filteredByNextDay1);

  const {maxTempMax: maxTempMax2, minTempMin: minTempMin2} =
    findMinMaxTemperatures(filteredByNextDay2);
  const {maxTempMax: maxTempMax3, minTempMin: minTempMin3} =
    findMinMaxTemperatures(filteredByNextDay3);
  const {maxTempMax: maxTempMax4, minTempMin: minTempMin4} =
    findMinMaxTemperatures(filteredByNextDay4);
  const {maxTempMax: maxTempMax5, minTempMin: minTempMin5} =
    findMinMaxTemperatures(filteredByNextDay5);
  const {maxTempMax: maxTempMax6, minTempMin: minTempMin6} =
    findMinMaxTemperatures(filteredByNextDay6);
  const daysData = [
    {
      daily: filteredByNextDay1[0],
      maxTempMax: maxTempMax1,
      minTempMin: minTempMin1,
    },
    {
      daily: filteredByNextDay2[0],
      maxTempMax: maxTempMax2,
      minTempMin: minTempMin2,
    },
    {
      daily: filteredByNextDay3[0],
      maxTempMax: maxTempMax3,
      minTempMin: minTempMin3,
    },
    {
      daily: filteredByNextDay4[0],
      maxTempMax: maxTempMax4,
      minTempMin: minTempMin4,
    },
    {
      daily: filteredByNextDay5[0],
      maxTempMax: maxTempMax5,
      minTempMin: minTempMin5,
    },
  ];

  return {
    weatherDetails,
    daysData,
  };
};
