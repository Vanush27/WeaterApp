import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';

import {WeatherDetailsList} from '@ui-modules';

import {useAppTranslation, useWeather} from '@hooks';
// import {useWeather} from '@hooks';
// import {kelvinToCelsius} from '@utils/unitConversion';
import {Text} from '@components';
// import {ImagesAssets} from 'assets/images/ImagesAssets';
// import {IImageCountry} from 'types/ImageCountry';

interface IBackgroundImageProps {
  index?: string;
  obj: any;
  countryListWeather: any;
}
const BackgroundImage = ({
  index,
  obj,
  countryListWeather,
}: IBackgroundImageProps) => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();

  return (
    <View key={index} style={styles.container_image_card}>
      <ImageBackground
        resizeMode="cover"
        source={ImagesAssets.Yerevan_winter}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.wrapper_top}>
            <Text h4>{obj?.city?.name}</Text>
            <Text style={styles.header} h3>
              @
            </Text>
          </View>

          <View style={styles.wrapper_bootom}>
            <FlatList
              data={countryListWeather}
              renderItem={({item}) => (
                <View style={styles.image_card}>
                  {/* <Text> {item?.city?.country}</Text> */}

                  {/* <WeatherDetailsList item={item?.list} /> */}
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
