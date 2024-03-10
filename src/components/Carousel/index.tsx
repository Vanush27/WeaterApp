import * as React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {BackgroundImageCard} from '@components';

import {useStyles} from './styles';

const HorizontalCarousel = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const {styles} = useStyles();

  const renderItem = (index: number) => {
    return (
      <View style={styles.render_wrapper}>
        <BackgroundImageCard />
        {/* <Text style={styles.render_index}>{index}</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height}
        // autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1200}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => renderItem(index)}
      />
    </View>
  );
};

export default HorizontalCarousel;
