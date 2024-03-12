import React from 'react';
import {View} from 'react-native';

import PlusButtonIcon from 'react-native-vector-icons/AntDesign';

import {useStyles} from './styles';
interface IPlusButtonProps {
  handleCountry: () => void;
  backgroundColor?: string;
}
const PlusButton = ({
  handleCountry,
  backgroundColor = '#f4f4f6',
}: IPlusButtonProps) => {
  const {styles} = useStyles();

  return (
    <View style={styles().plus_icon_wrapper}>
      <PlusButtonIcon
        name="plus"
        size={24}
        style={styles(backgroundColor).plus_btn}
        onPress={handleCountry}
      />
    </View>
  );
};

export default PlusButton;
