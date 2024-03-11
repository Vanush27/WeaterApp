import React from 'react';
import {View} from 'react-native';

import {BackButton} from '@components';

import CountrySearchForm from '@components/Forms/CountrySearch';

import {useStyles} from './styles';

const AddCity = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container_location}>
      <BackButton />
      <View style={styles.wrapper_search}>
        <CountrySearchForm />
      </View>
    </View>
  );
};

export default AddCity;
