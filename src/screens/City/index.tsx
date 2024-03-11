import React from 'react';
import {Pressable, View} from 'react-native';

import {useAppTranslation, useWeather} from '@hooks';

import {useStyles} from './styles';
import {SelecteList, PlusButton, Text} from '@components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const City = () => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();

  const {navigate} =
    useNavigation<NativeStackNavigationProp<ParamListBase, 'Home'>>();
  const {countryListWeather, setCurrentCountry} = useWeather();

  const handleCountry = () => {
    navigate('AddCity');
  };

  const handlePressCountry = async countryItem => {
    // await setCurrentCountry(countryItem);
    // navigation?.navigate('Home');
  };

  const onPressFunction = () => {
    // todo change size button
  };

  return (
    <View style={styles.container}>
      <View style={styles.country_list}>
        <SelecteList />

        {/* TODO list controu */}
        {!!countryListWeather?.length &&
          countryListWeather.map((obj, index) => {
            return (
              <View key={index} style={styles.container_country}>
                <Pressable
                  onLongPress={onPressFunction}
                  onPress={() => handlePressCountry(obj)}>
                  <Text h4>{obj?.city?.name}</Text>
                </Pressable>
              </View>
            );
          })}
      </View>

      <View style={styles.plus_btn_wrapper}>
        <PlusButton backgroundColor={'green'} handleCountry={handleCountry} />
      </View>
    </View>
  );
};

export default City;
