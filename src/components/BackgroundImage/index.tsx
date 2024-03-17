import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';

import {WeatherDetailsList} from '@ui-modules';

import {useAppTranslation, useWeather, useWeatherDetail} from '@hooks';
// import {useWeather} from '@hooks';
// import {kelvinToCelsius} from '@utils/unitConversion';
import {Text} from '@components';
import {useAppSettings} from '@redux/hooks/useAppSettings';
import {CELSIUS_TEMP, FAHRENHEIT_TEMP, THOUSAND} from '@constants';
import {kelvinToCelsius} from '@utils/unitConversion';

// import {ImagesAssets} from 'assets/images/ImagesAssets';
// import {IImageCountry} from 'types/ImageCountry';

interface IBackgroundImageProps {
  obj: any;
}
const BackgroundImage = ({obj}: IBackgroundImageProps) => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();

  // const date = new Date();
  // const seconds = date.getTime() / THOUSAND;

  // const getWeatherDetails = list => {
  //   return list?.list?.reduce(function (prev, curr) {
  //     return Math.abs(curr - seconds) < Math.abs(prev - seconds) ? curr : prev;
  //   });
  // };
  // const weatherDetails = getWeatherDetails(obj);
  const {weatherDetails} = useWeatherDetail(obj);

  const {temperature} = useAppSettings();

  const renderListItem = ({item}) => {
    return (
      <View style={styles.image_card}>
        <Text>{item?.city?.country}</Text>
        <WeatherDetailsList list={item} />
      </View>
    );
  };

  return (
    <View style={styles.container_image_card}>
      <ImageBackground
        resizeMode="cover"
        source={ImagesAssets.Yerevan_winter}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.wrapper_top}>
            <Text h4>{obj?.city?.name}</Text>

            <Text style={styles.header} h3>
              {temperature === CELSIUS_TEMP
                ? kelvinToCelsius(weatherDetails?.main.temp)
                : weatherDetails?.main.temp + ' ' + FAHRENHEIT_TEMP}
            </Text>
          </View>

          <View style={styles.wrapper_bootom}>
            <FlatList
              data={[obj]}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderListItem}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BackgroundImage;
