import * as React from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';

import {WeatherDetailsList} from '@ui-modules';

import {useAppTranslation, useWeatherDetail} from '@hooks';

import {Text} from '@components';
import {useAppSettings} from '@redux/hooks/useAppSettings';
import {CELSIUS_TEMP, FAHRENHEIT_TEMP} from '@constants';
import {kelvinToCelsius} from '@utils/unitConversion';
import {contriList} from '@utils/allCoutry';
import {useEffect, useState} from 'react';
import {IImageCountry} from '../../types/ImageCountry';
import {ICountryListWeather} from '../../types/Weather';

interface IBackgroundImageProps {
  obj: ICountryListWeather;
}
const BackgroundImage = ({obj}: IBackgroundImageProps) => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();
  const {dispatchSetTheme, themeStats} = useAppSettings();

  const {weatherDetails} = useWeatherDetail(obj);
  const {temperature} = useAppSettings();

  const result = () => {
    const foundCountry = contriList.find(
      item => item.cca2 === obj?.city.country,
    );
    return foundCountry ? foundCountry.flag : '';
  };

  const renderListItem = ({item}) => {
    return (
      <View style={styles.image_card}>
        <WeatherDetailsList list={item} />
      </View>
    );
  };

  const [images, setImages] = useState<IImageCountry | undefined>();

  const loadImage = async () => {
    // const cityImage = await getImageCountry(obj.city.name);
    // setImages(cityImage);
  };

  useEffect(() => {
    loadImage();
  }, [obj?.city.name]);

  return (
    <View style={styles.container_image_card}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={
          obj?.city.country === 'AM'
            ? ImagesAssets.Yerevan_winter
            : ImagesAssets.Dehli
        }>
        <View style={styles.container}>
          <View style={styles.wrapper_top}>
            <View>
              <Text style={styles.name}>{t(`${obj?.city?.name}`)}</Text>
              <Text style={styles.header}>
                {temperature === CELSIUS_TEMP
                  ? kelvinToCelsius(weatherDetails?.main.temp)
                  : weatherDetails?.main.temp + ' ' + FAHRENHEIT_TEMP}
              </Text>
            </View>

            <View>
              <Text style={styles.flag}>{result()}</Text>
            </View>
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
