import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useWeather} from '@hooks';
import {CheckBox} from '@rneui/themed';

import {SelecteList, PlusButton} from '@components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ICountryListWeather} from '../../types/Weather';
import {ScrollView} from 'react-native-gesture-handler';
import DeleteIcon from 'react-native-vector-icons/AntDesign';

import {useStyles} from './styles';

const City = () => {
  const {styles} = useStyles();

  const {navigate} =
    useNavigation<NativeStackNavigationProp<ParamListBase, 'Home'>>();
  const {countryListWeather, handleDeleteCountry} = useWeather();

  const handleCountry = () => {
    navigate('AddCity');
  };

  const [country, setDataListCountry] = useState(countryListWeather);

  const allSelected = country?.every(item => item?.selected);

  const handleToggleSelectAll = () => {
    const newData = country?.map((item: ICountryListWeather) => ({
      ...item,
      selected: !allSelected, // Toggle the selected state based on the current allSelected value
    }));
    setDataListCountry(newData);
  };

  const handleSelectItem = (city: ICountryListWeather) => {
    const newData = country?.map((item: ICountryListWeather) => {
      if (item.city.name === city.city.name) {
        return {...item, selected: !item.selected}; // Toggle the selected field
      }
      return item;
    });
    setDataListCountry(newData);
  };

  const handleDeleteItem = async (item: ICountryListWeather) => {
    handleDeleteCountry(item?.city.name);
  };

  const renderItemContry = () => {
    return country?.map((obj: ICountryListWeather, index: number) => {
      return (
        <View key={index}>
          <SelecteList
            data={obj}
            handleSelectItem={() => handleSelectItem(obj)}
            index={index}
          />
          {obj?.selected && (
            <DeleteIcon
              color={'red'}
              name="delete"
              size={24}
              onPress={() => handleDeleteItem(obj)}
            />
          )}
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.country_list}>
        <View style={styles.all_select}>
          <CheckBox
            checked={allSelected}
            checkedColor="green"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            wrapperStyle={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
            }}
            onPress={handleToggleSelectAll}
          />
        </View>
        <ScrollView>{renderItemContry()}</ScrollView>
      </View>

      <View style={styles.plus_btn_wrapper}>
        <PlusButton backgroundColor={'green'} handleCountry={handleCountry} />
      </View>
    </SafeAreaView>
  );
};

export default City;
