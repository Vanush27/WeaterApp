import * as React from 'react';
import {ImageBackground, View, Text, FlatList} from 'react-native';
import {useStyles} from './styles';
import {ImagesAssets} from '@assets/images/ImagesAssets';
// import {useWeather} from '@hooks';
// import {kelvinToCelsius} from '@utils/unitConversion';
// import {WeatherHeader} from 'components';
// import {ImagesAssets} from 'assets/images/ImagesAssets';
// import {IImageCountry} from 'types/ImageCountry';

const BackgroundImageCard = () => {
  const {styles} = useStyles();

  const list = [
    {key: 'image1', imgLink: 'imagelink1'},
    {key: 'image2', imgLink: 'imagelink2'},
  ];

  return (
    <View style={styles.container_image_card}>
      <ImageBackground
        source={ImagesAssets.Yerevan_winter}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            {/* <Text style={styles.header}>Yerevan</Text> */}
          </View>

          <View style={styles.wrapper}>
            <FlatList
              data={list}
              renderItem={({item}) => (
                <View style={styles.image_card}>
                  <Text>{item.key}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BackgroundImageCard;
