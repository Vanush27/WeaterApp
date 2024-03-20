import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import moment from 'moment';
import {kelvinToCelsius, kelvinToCelsiusDaily} from '@utils/unitConversion';

import TemperatureHighIcon from 'react-native-vector-icons/FontAwesome5';
import {Humidity, SNOW_2} from '@assets/icons';

import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';
import {CELSIUS_TEMP} from '@constants';
import {colors} from '@assets/colors';

const DailyForecast = ({daily, maxTempMax, minTempMin, country}: any) => {
  const {styles} = useStyles();

  return (
    <View style={styles.dayly_container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.dayly_image}
        imageStyle={{
          borderRadius: 15,
          backgroundColor: 'rgba(5,2,0, 0.4)',
        }}
        source={
          country === 'AM' ? ImagesAssets.Yerevan_Summer : ImagesAssets.Dehli
        }>
        <View style={styles.week_day}>
          <View style={styles.left_container}>
            <Text style={styles.text_color}>
              {moment(daily?.dt_txt).format('dddd')}
            </Text>
            <Text style={styles.text_color}>
              {daily?.weather[0]?.description}
            </Text>
          </View>

          <View style={styles.right_container}>
            <SNOW_2 fill={colors.lightGold} height={100} width={130} />
            <TemperatureHighIcon name="temperature-high" size={24} />
            <Text style={styles.degree}>
              {kelvinToCelsiusDaily(maxTempMax)}
              {kelvinToCelsiusDaily(minTempMin)}
              {CELSIUS_TEMP}
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.degree}> {daily?.main?.humidity}%</Text>
              <Humidity fill={colors.lightGold} height={30} width={30} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DailyForecast;
