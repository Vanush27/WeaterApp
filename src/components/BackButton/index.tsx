import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import {Chevron} from '@assets/icons';

import {useStyles} from './styles';

type TBackButtonProps = {
  automaticStyles?: boolean;
  onBackPress?: () => void;
};

const BackButton: FC<TBackButtonProps> = ({
  automaticStyles = true,
  onBackPress,
}) => {
  const navigation = useNavigation();
  const {styles} = useStyles();

  const navigateBack = () => {
    navigation.goBack();
    // if (onBackPress) {
    //   onBackPress();
    // }
  };

  const wrapper = automaticStyles
    ? styles.styled_button
    : styles.un_styled_button;

  return (
    <TouchableOpacity style={wrapper} onPress={navigateBack}>
      <Chevron height={35} width={35} />
    </TouchableOpacity>
  );
};
export default BackButton;
