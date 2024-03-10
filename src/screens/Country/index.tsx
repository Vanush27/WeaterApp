import React from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';

import CountrySearchForm from '@components/Forms/CountrySearch';
import {useAppTranslation, useWeather} from '@hooks';

import {useStyles} from './styles';
import {PlusButton, Text} from '@components';
import PlusButtonIcon from 'react-native-vector-icons/AntDesign';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Country = () => {
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
    <View style={styles.container_search}>
      <View style={styles.search_input}>
        <Text>{t('Yerevan')} </Text>
        <Text>{t('Moscow ')} </Text>

        {/* List City */}
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

        <View>
          <PlusButton handleCountry={handleCountry} />
        </View>
      </View>
    </View>
  );
};

export default Country;
