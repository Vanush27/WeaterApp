import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton, Photo, ScreenWrapper, Text} from '@components';

import {useAppSettings} from '@redux/hooks/useAppSettings';

import {useStyles} from './styles';
import {useAppTranslation} from '@hooks';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';

const UploadImage = () => {
  const {styles} = useStyles();

  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState([]);

  const {t} = useAppTranslation();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<ParamListBase, 'Home'>>();

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        const imageUri = response?.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        const imageUri = response?.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };

  const uploadImage = async () => {
    setUploading(true);

    try {
      await firestore().collection('photo').add({
        image: selectedImage,
        name: Math.random(),
      });
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }

    setUploading(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await firestore().collection('photo').get();
        const documentsData = [];
        querySnapshot.forEach(doc => {
          documentsData.push({id: doc.id, ...doc.data()});
        });
        setDocuments(documentsData);
        setUploading(false);
      } catch (error) {
        console.error('Error fetching documents:', error);
        setUploading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (uploading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="#0000ff" size="large" />
      </View>
    );
  }

  return (
    <ScreenWrapper statusBarType={'white'}>
      <BackButton />
      <View style={styles.wrapper}>
        <Text>{t('main photo')}</Text>
        <Text>{t('daily photo')}</Text>
        <Photo
          documents={documents}
          handleCameraLaunch={handleCameraLaunch}
          openImagePicker={openImagePicker}
          uploadImage={uploadImage}
        />
      </View>
    </ScreenWrapper>
  );
};

export default UploadImage;
