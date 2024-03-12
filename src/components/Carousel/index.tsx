import * as React from 'react';
import {View} from 'react-native';
import {BackgroundImage} from '@components';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {useWeather} from '@hooks';

import {useStyles} from './styles';

const HorizontalCarousel = () => {
  const {styles} = useStyles();
  const {countryListWeather} = useWeather();

  const renderItem = ({item}) => {
    return (
      <View style={styles.render_wrapper}>
        {countryListWeather?.map((index: string) => (
          <BackgroundImage
            countryListWeather={countryListWeather}
            key={index}
            obj={item}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <SwiperFlatList
        paginationActiveColor={'green'}
        renderItem={renderItem}
        showPagination
        autoplayDelay={2}
        // index={2}
        data={countryListWeather}
        paginationStyle={{
          position: 'absolute',
          top: 30,
          left: 10,
        }}
      />
    </View>
  );
};

export default HorizontalCarousel;
