import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {ListItem} from '@rneui/themed';

import {useStyles} from './styles';
import {getWeatherViaLocation} from '@api';
import {useCountry, useWeather} from '@hooks';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IListCountry} from './types';

interface ICountryListProps {
  loading: boolean;
  data: IListCountry[];
}
const CountryList = ({data, loading}: ICountryListProps) => {
  const {styles} = useStyles();
  const {createNewCountry} = useWeather();
  const {dispatchSetCityName} = useCountry();

  const navigation =
    useNavigation<NativeStackNavigationProp<ParamListBase, 'Weather'>>();

  const handleCurrentCountry = async (city: string) => {
    try {
      const getSearchCountry = await getWeatherViaLocation({
        city_name: city,
        lang: 'en',
      });

      await createNewCountry(getSearchCountry);
      dispatchSetCityName('');

      navigation?.navigate('Home');
    } catch (e) {
      console.log(e, 'handleCountry');
    }
  };

  const renderItem = ({item}: {item: IListCountry}) => {
    return (
      <TouchableOpacity onPress={() => handleCurrentCountry(item.name)}>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item?.name}</ListItem.Title>
            <ListItem.Title>{item?.country}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator
          color="#0275d8"
          size="large"
          style={styles.indicator_activity}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={renderItem}
          style={styles.flat_list}
        />
      )}
    </View>
  );
};

export default CountryList;
