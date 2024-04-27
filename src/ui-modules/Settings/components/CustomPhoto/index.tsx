import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Photo, Text} from '@components';

import {useAppSettings} from '@redux/hooks/useAppSettings';

import {useStyles} from './styles';
import {useAppTranslation} from '@hooks';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const CustomPhoto = () => {
  const {styles} = useStyles();
  const {t} = useAppTranslation();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<ParamListBase, 'Home'>>();

  const customPhotoHandle = () => {
    navigate('UploadImage');
  };

  return (
    <View style={styles.wrapper}>
      <Text h4 onPress={customPhotoHandle}>
        {t('Photo')}
      </Text>
    </View>
  );
};

export default CustomPhoto;
