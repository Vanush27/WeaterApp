import React from 'react';
import {View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Text} from '@components';

import CountrySearchForm from '@components/Forms/CountrySearch';

import {useStyles} from './styles';

const AddCity = () => {
  const {styles} = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<ParamListBase, 'Weather'>>();

  return (
    <View style={styles.container_location}>
      <View>
        <Text h4>{'Yerevan'}</Text>
        <CountrySearchForm />
      </View>
    </View>
  );
};

export default AddCity;
