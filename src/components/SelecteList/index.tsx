import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RadioButton, Text} from '@components';
import {ICountryListWeather} from '../../types/Weather';

import {useStyles} from './styles';

interface ISelecteListProps {
  index: number;
  data: ICountryListWeather;
  handleSelectItem: any;
}
const SelecteList = ({index, data, handleSelectItem}: ISelecteListProps) => {
  const {styles} = useStyles();

  return (
    <View key={index} style={styles.container_country}>
      <TouchableOpacity
        style={styles.select_item}
        onPress={() => handleSelectItem(data?.city)}>
        <Text h4>{data?.city?.name}</Text>
        {data?.selected && <RadioButton />}
      </TouchableOpacity>
    </View>
  );
};

export default SelecteList;
