import React, {memo} from 'react';
import {View} from 'react-native';
import moment from 'moment';
import {Text} from '@components';

import {useTranslation} from 'react-i18next';
import {useWeatherDetail} from '@hooks';

import {ImagesAssets} from '@assets/images/ImagesAssets';

import WeatherDetails from '../WeatherDetails';
import WeatherInfo from '../WeatherInfo';

import {useStyles} from './styles';

const WeatherDetailsList = ({list}: any) => {
  const {styles} = useStyles();
  const {t} = useTranslation();

  const {weatherDetails} = useWeatherDetail(list);

  const timezone = list?.city?.timezone;
  const sunrise = list?.city?.sunrise;
  const sunset = list?.city?.sunset;

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
          description={weatherDetails?.wind?.speed}
          icon={ImagesAssets.wind}
          name={t('wind')}
          siUnit={t('m/s')}
        />

        <WeatherDetails
          description={weatherDetails?.wind?.speed}
          icon={ImagesAssets.rain}
          name={t('rainfall')}
          siUnit={'sm'}
        />
      </View>

      <View style={styles.detail_container}>
        <WeatherDetails
          description={sunriseTime}
          icon={ImagesAssets.sunrise}
          name={t('sunrise')}
        />
        <WeatherDetails
          description={sunsetTime}
          icon={ImagesAssets.sunset}
          name={t('sunset')}
        />
      </View>
      <View style={styles.detail_container}>
        <WeatherDetails
          description={weatherDetails?.visibility}
          icon={ImagesAssets.visibility}
          name={t('visibility')}
          siUnit={t('m')}
        />
        <WeatherDetails
          description={weatherDetails?.main?.pressure}
          icon={ImagesAssets.pressure}
          name={t('pressure')}
        />
      </View>

      <View style={styles.detail_container}>
        <WeatherDetails
          description={weatherDetails?.main?.humidity}
          icon={ImagesAssets.humidity}
          name={t('humidity')}
          siUnit={'%'}
        />
      </View>

      <Text style={styles.weather_detail_txt}> {t('Daily')}</Text>
      <WeatherInfo list={list} />
    </>
  );
};

export default memo(WeatherDetailsList);
