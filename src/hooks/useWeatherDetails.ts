import {THOUSAND} from '@constants';
import {useWeather} from '@hooks';

export const useWeatherDetail = ({list}: any) => {
  const {currentWeather} = useWeather();

  //   const date = new Date();
  //   const seconds = date.getTime() / THOUSAND;
  const getWeatherDetails = currentDayFoSec => {
    return list?.reduce(function (prev, curr) {
      return Math.abs(curr - currentDayFoSec) < Math.abs(prev - currentDayFoSec)
        ? curr
        : prev;
    });
  };

  const weatherDetails = getWeatherDetails(currentWeather);

  return {
    weatherDetails,
  };
};
