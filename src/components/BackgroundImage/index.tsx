import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {ImageBackground, View, Text, FlatList} from 'react-native';
import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';

import {WeatherDetailsList} from '@ui-modules';

import {useAppTranslation, useWeather} from '@hooks';
// import {useWeather} from '@hooks';
// import {kelvinToCelsius} from '@utils/unitConversion';
// import {WeatherHeader} from 'components';
// import {ImagesAssets} from 'assets/images/ImagesAssets';
// import {IImageCountry} from 'types/ImageCountry';

const BackgroundImage = () => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();
  const {weatherDetails, currentWeather, countryListWeather} = useWeather();

  const list = [
    {key: 'image1', imgLink: 'imagelink1'},
    {key: 'image2', imgLink: 'imagelink2'},
  ];

  return (
    <View style={styles.container_image_card}>
      <ImageBackground
        resizeMode="cover"
        source={ImagesAssets.Yerevan_winter}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.wrapper_top}>
            <Text style={styles.header}>{t('Yerevan')}</Text>
            <Text style={styles.header}>@</Text>
          </View>

          <View style={styles.wrapper_bootom}>
            <FlatList
              data={list}
              renderItem={() => (
                <View style={styles.image_card}>
                  <WeatherDetailsList />
                </View>
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BackgroundImage;
