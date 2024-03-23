import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {BackButton} from '@components';

import CountrySearchForm from '@components/Forms/CountrySearch';

import {useStyles} from './styles';

const AddCity = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container_location}>
      <BackButton />
      <View style={styles.wrapper_search}>
        <CountrySearchForm />
      </View>
    </SafeAreaView>
  );
};

export default AddCity;
