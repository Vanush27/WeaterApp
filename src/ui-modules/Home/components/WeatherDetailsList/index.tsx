import React, {memo} from 'react';
import {View} from 'react-native';
import {Text} from '@components';

import {useTranslation} from 'react-i18next';
import {useWeather, useWeatherDetail} from '@hooks';

import {ImagesAssets} from '@assets/images/ImagesAssets';
import moment from 'moment';

import WeatherDetails from '../WeatherDetails';
import WeatherInfo from '../WeatherInfo';
import {THOUSAND} from '@constants';

import {useStyles} from './styles';

const WeatherDetailsList = ({list}: any) => {
  const {styles} = useStyles();
  const {t} = useTranslation();

  const {currentWeather} = useWeather();
  const {weatherDetails} = useWeatherDetail(list);

  const timezone = currentWeather?.city?.timezone;
  const sunrise = currentWeather?.city?.sunrise;
  const sunset = currentWeather?.city?.sunset;

  // const date = new Date();
  // const seconds = date.getTime() / THOUSAND;
  // const getWeatherDetails = currentDayFoSec => {
  //   return list?.list?.reduce(function (prev, curr) {
  //     return Math.abs(curr - currentDayFoSec) < Math.abs(prev - currentDayFoSec)
  //       ? curr
  //       : prev;
  //   });
  // };
  // const weatherDetails = getWeatherDetails(currentWeather);

  const sunriseTime = moment
    .utc(sunrise, 'X')
    .add(timezone, 'seconds')
    .format('HH:mm a');

  const sunsetTime = moment
    .utc(sunset, 'X')
    .add(timezone, 'seconds')
    .format('HH:mm a');

  return (
    <>
      <Text style={styles.weather_detail_txt}>{t('Weather Detail')}</Text>

      <View style={styles.detail_container}>
        <WeatherDetails
          description={weatherDetails?.main?.humidity}
          icon={ImagesAssets.wind}
          name={'wind'}
          siUnit={'%'}
        />

        <WeatherDetails
          description={weatherDetails?.wind?.speed}
          icon={ImagesAssets.rain}
          name={'rainfall'}
          siUnit={'sm'}
        />
      </View>

      <View style={styles.detail_container}>
        <WeatherDetails
          description={sunriseTime}
          icon={ImagesAssets.sunrise}
          name={'sunrise'}
        />
        <WeatherDetails
          description={sunsetTime}
          icon={ImagesAssets.sunset}
          name={'sunset'}
        />
      </View>
      <View style={styles.detail_container}>
        <WeatherDetails
          description={weatherDetails?.weather?.[0].description}
          icon={ImagesAssets.humidity}
          name={'humidity'}
        />
      </View>

      <View style={styles.detail_container}>
        <WeatherDetails
          description={weatherDetails?.visibility}
          icon={ImagesAssets.visibility}
          name={'visibility'}
          siUnit={'m'}
        />
        <WeatherDetails
          description={weatherDetails?.main?.pressure}
          icon={ImagesAssets.pressure}
          name={'pressure'}
        />
      </View>

      <Text style={styles.weather_detail_txt}> {t('Daily')}</Text>
      <WeatherInfo />
    </>
  );
};

export default memo(WeatherDetailsList);
