import React from 'react';
import {Text, View, Image} from 'react-native';
import {useStyles} from './styles';

interface IWeatherDetailsProps {
  name: string;
  icon: [];
  description: string;
  siUnit?: string;
}
const WeatherDetails = ({
  name,
  icon,
  description,
  siUnit,
}: IWeatherDetailsProps) => {
  const {styles} = useStyles();

  return (
    <View style={styles.box_wrapper}>
      <View style={styles.wrapper_header}>
        <Image source={icon} style={styles.icon} />
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.header_text}>
          {name}
        </Text>
      </View>
      <View>
        <View style={styles.measure_wrapper}>
          <Text style={styles.measure_weather}>{description}</Text>
          <Text style={styles.measure_si_unit}>{siUnit}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetails;
