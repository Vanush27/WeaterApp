import React from 'react';
import {View} from 'react-native';

import {useAppTranslation, useWeatherDetail} from '@hooks';
import DailyForecast from '../DailyForecast';

import {useStyles} from './styles';

const WeatherInfo = ({list}: any) => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();

  const {daysData} = useWeatherDetail(list);

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
