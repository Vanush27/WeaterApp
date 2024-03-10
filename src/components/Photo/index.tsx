import React, {useState} from 'react';
import {Button, Image, View} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useStyles} from './styles';

const Photo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const {styles} = useStyles();
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
        const imageUri = response.uri || response.assets?.[0]?.uri;
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
        const imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          // style={{flex: 1}}
          resizeMode="contain"
        />
      )}
      <View style={styles.marginTop}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
      <View style={styles.marginTop}>
        <Button title="Open Camera" onPress={handleCameraLaunch} />
      </View>
    </View>
  );
};

export default Photo;
