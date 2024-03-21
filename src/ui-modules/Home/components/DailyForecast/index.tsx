import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import moment from 'moment';
import {kelvinToCelsius, kelvinToCelsiusDaily} from '@utils/unitConversion';

import TemperatureHighIcon from 'react-native-vector-icons/FontAwesome5';
import {Humidity, Snowy_Clouds} from '@assets/icons';

import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';
import {CELSIUS_TEMP} from '@constants';
import {colors} from '@assets/colors';

const DailyForecast = ({daily, maxTempMax, minTempMin, country}: any) => {
  const {styles} = useStyles();

  // const weatherState = ['', '', 'light rain']; scattered clouds
  const weatherDescription = daily?.weather[0]?.description;

  const overcastClouds = weatherDescription?.includes('overcast clouds');
  const clearSky = weatherDescription?.includes('clear sky');
  const lightRain = weatherDescription?.includes('light rain');
  const scatteredClouds = weatherDescription?.includes('scattered clouds');

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
              {/* {overcastClouds && <Text>overcastClouds</Text>} */}
              {/* {clearSky && <Text>clearSky</Text>} */}
              {/* {daily?.weather[0]?.description.includes('"clear sky')} */}
            </Text>
          </View>

          <View style={styles.right_container}>
            <Snowy_Clouds fill={colors.lightGold} height={100} width={130} />

            <View style={styles.right_container_temp}>
              <TemperatureHighIcon
                color="blue"
                name="temperature-high"
                size={24}
              />
              <Text style={styles.min_temp}>
                {kelvinToCelsiusDaily(minTempMin)}
                {CELSIUS_TEMP}
              </Text>
            </View>

            <View style={styles.right_container_temp}>
              <TemperatureHighIcon
                color="red"
                name="temperature-high"
                size={24}
              />
              <Text style={styles.max_temp}>
                {kelvinToCelsiusDaily(maxTempMax)}
                {CELSIUS_TEMP}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DailyForecast;
