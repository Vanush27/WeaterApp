import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from '@components';

import {useAppTranslation, useWeather} from '@hooks';
import {useStyles} from './styles';
import DailyForecast from '../DailyForecast';

const WeatherInfo = () => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();

  const {filteredByCurrentDay} = useWeather();
  const [loading, setLoading] = useState(false);

  const {
    filteredByNextDay1,
    filteredByNextDay2,
    filteredByNextDay3,
    filteredByNextDay4,
    filteredByNextDay5,
  } = useWeather();

  return (
    <>
      <View style={styles.container_weather}>
        {loading ? (
          <Text>{t('Loading...')} </Text>
        ) : (
          !!filteredByCurrentDay?.length &&
          filteredByCurrentDay[0] && (
            <ScrollView>
              <DailyForecast daily={filteredByNextDay1[0]} />
              <DailyForecast daily={filteredByNextDay2[0]} />
              <DailyForecast daily={filteredByNextDay3[0]} />
              <DailyForecast daily={filteredByNextDay4[0]} />
              <DailyForecast daily={filteredByNextDay5[0]} />
            </ScrollView>
          )
        )}
      </View>
    </>
  );
};

export default WeatherInfo;
