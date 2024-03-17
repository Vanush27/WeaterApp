import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Chevron} from '@assets/icons';

import {useStyles} from './styles';

type TBackButtonProps = {
  automaticStyles?: boolean;
};

const BackButton: FC<TBackButtonProps> = ({automaticStyles = true}) => {
  const {goBack} = useNavigation();
  const {styles} = useStyles();

  const navigateBack = () => {
    goBack();
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
