import React from 'react';
import {View} from 'react-native';

import {useStyles} from './styles';

const RadioButton = () => {
  const {styles} = useStyles();

  return <View style={styles.container} />;
};
export default RadioButton;
