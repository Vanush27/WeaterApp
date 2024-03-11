import * as React from 'react';
import {View} from 'react-native';
import {BackgroundImage} from '@components';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {useWeather} from '@hooks';

import {useStyles} from './styles';

const HorizontalCarousel = () => {
  const {styles} = useStyles();
  const {countryListWeather} = useWeather();

  const renderItem = () => {
    return (
      <View style={styles.render_wrapper}>
        <BackgroundImage />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <SwiperFlatList
        autoplayDelay={2}
        // autoplayLoop
        // index={2}
        data={[...new Array(countryListWeather.length).keys()]}
        paginationActiveColor={'green'}
        renderItem={() => renderItem()}
        showPagination
        paginationStyle={{
          position: 'absolute',
          // padding: 30,
          top: 30,
          left: 10,
        }}
        // renderItem={({item}) => (
        //   <View style={[styles.child, {backgroundColor: item}]}>
        //     <Text style={styles.text}>{item}</Text>
        //   </View>
        // )}
      />
    </View>
  );
};

export default HorizontalCarousel;
