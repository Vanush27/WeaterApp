import moment from 'moment';

export const day1 = moment().add(1, 'days').format('DD');
export const day2 = moment().add(2, 'days').format('DD');
export const day3 = moment().add(3, 'days').format('DD');
export const day4 = moment().add(4, 'days').format('DD');
export const day5 = moment().add(5, 'days').format('DD');
export const day6 = moment().add(6, 'days').format('DD');

export function findMinMaxTemperatures(weatherList) {
  let maxTempMax = -Infinity;
  let minTempMin = Infinity;

  weatherList.forEach(item => {
    if (item?.main.temp_max > maxTempMax) {
      maxTempMax = item.main.temp_max;
    }

    if (item.main.temp_min < minTempMin) {
      minTempMin = item.main.temp_min;
    }
  });

  return {maxTempMax, minTempMin};
}
