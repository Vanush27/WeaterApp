import React from 'react';
import {View} from 'react-native';

import {useAppTranslation, useWeatherDetail} from '@hooks';
import DailyForecast from '../DailyForecast';

import {useStyles} from './styles';
import {getWeatherViaLocation} from '@api';

const WeatherInfo = ({list}: any) => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();

  const {daysData} = useWeatherDetail(list);

  const getRequestData = async () => {
    const getSearchCountry = await getWeatherViaLocation({
      // city_name: city,
    });
  };

  return (
    <View style={styles.container_weather}>
      {daysData.map((day, index) => (
        <DailyForecast
          country={list.city.country}
          daily={day.daily}
          key={index}
          maxTempMax={day.maxTempMax}
          minTempMin={day.minTempMin}
        />
      ))}
    </View>
  );
};

export default WeatherInfo;
