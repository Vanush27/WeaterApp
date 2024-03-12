import React from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import {kelvinToCelsius} from '@utils/unitConversion';

import TemperatureHighIcon from 'react-native-vector-icons/FontAwesome5';
import {Humidity} from '@assets/icons';

import {useStyles} from './styles';

const DailyForecast = ({daily}: any) => {
  const {styles} = useStyles();

  return (
    <View style={styles.day_container}>
      <View style={styles.date_container}>
        <View style={styles.week_day}>
          <View style={styles.week_day_name}>
            <Text style={styles.text_color}>
              {moment(daily?.dt_txt).format('dddd')}
            </Text>
          </View>
          <View style={styles.icon_temp_view}>
            {/* <Image
              resizeMode={'contain'}
              style={styles.weather_icon}
              source={{
                uri: `${imageUrl}/${daily?.weather[0].icon}@2x.png`,
              }}
            /> */}
            <Text style={styles.text_color}>
              {daily?.weather[0]?.description}
            </Text>
          </View>

          <View style={styles.degree_view}>
            <Text style={styles.degree}>
              <TemperatureHighIcon name="temperature-high" size={24} />
              {kelvinToCelsius(daily?.main?.temp)}
            </Text>

            <View>
              <Text> {daily?.main?.humidity}%</Text>
              <Humidity height={30} width={30} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DailyForecast;
