import React, {useCallback} from 'react';
import {View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {BackgroundImage} from '@components';
import {useWeather} from '@hooks';

import {useStyles} from './styles';

const HorizontalCarousel = () => {
  const {styles} = useStyles();
  const {countryListWeather} = useWeather();

  const renderItem = useCallback(({item}) => {
    return (
      <View style={styles.render_wrapper}>
        <BackgroundImage obj={item} />
      </View>
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <SwiperFlatList
        data={countryListWeather}
        paginationActiveColor={'#7E38B7'}
        paginationStyle={styles.pagination_style}
        renderItem={renderItem}
        showPagination
      />
    </View>
  );
};

export default HorizontalCarousel;
