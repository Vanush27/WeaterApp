import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RadioButton, Text} from '@components';
// import {ICountryListWeather} from '@types/Weather';
import {ICountryListWeather} from '../../types/Weather';

import {useStyles} from './styles';

interface ISelecteListProps {
  index: string;
  data: ICountryListWeather | any;
  handleSelectItem: any;
}
const SelecteList = ({index, data, handleSelectItem}: ISelecteListProps) => {
  const {styles} = useStyles();

  // const handleDeleteItem = index => {
  //   const newData = [...data];
  //   newData.splice(index, 1); // Remove item at index
  //   setData(newData);
  // };

  return (
    <View key={index} style={styles.container_country}>
      <TouchableOpacity
        style={styles.select_item}
        onPress={() => handleSelectItem(data?.city)}>
        <Text h4>{data?.city?.name}</Text>
        {data?.city?.selected && <RadioButton />}
      </TouchableOpacity>
    </View>
  );
};

export default SelecteList;
