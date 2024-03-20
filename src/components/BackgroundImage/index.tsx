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

interface IBackgroundImageProps {
  obj: any;
}
const BackgroundImage = ({obj}: IBackgroundImageProps) => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();
  const {dispatchSetTheme, themeStats} = useAppSettings();

  // const isDark = themeStats === 'dark';

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
        source={
          obj?.city.country === 'AM'
            ? ImagesAssets.Yerevan_winter
            : ImagesAssets.Dehli
        }
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.wrapper_top}>
            <Text style={styles.name}>{obj?.city?.name}</Text>

            <Text style={styles.header}>
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
