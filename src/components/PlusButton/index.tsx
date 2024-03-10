import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import CountrySearchForm from '@components/Forms/CountrySearch';
import {useAppTranslation} from '@hooks';

import {useStyles} from './styles';
import {Text} from '@components';
import PlusButtonIcon from 'react-native-vector-icons/AntDesign';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface IPlusButtonProps {
  handleCountry: () => void;
}
const PlusButton = ({handleCountry}: IPlusButtonProps) => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();

  const {navigate} =
    useNavigation<NativeStackNavigationProp<ParamListBase, 'Home'>>();
  // const {countryListWeather, setCurrentCountry} = useWeather();

  return (
    <TouchableOpacity style={styles.plus_icon_wrapper} onPress={handleCountry}>
      <PlusButtonIcon name="plus" size={24} style={styles.plus_btn} />
    </TouchableOpacity>
  );
};

export default PlusButton;
