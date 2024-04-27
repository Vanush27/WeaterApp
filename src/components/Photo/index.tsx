import React from 'react';
import {
  Button,
  Image,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';

import {useStyles} from './styles';
import {useAppTranslation} from '@hooks';

const Photo = ({
  openImagePicker,
  selectedImage,
  handleCameraLaunch,
  uploadImage,
  documents,
}: any) => {
  const {styles} = useStyles();

  const {t} = useAppTranslation();
  return (
    <View>
      {selectedImage && (
        <Image
          resizeMode="contain"
          source={{uri: selectedImage}}
          style={{flex: 1}}
        />
      )}

      <View style={styles.marginTop}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
      <View style={styles.marginTop}>
        <Button title="Open Camera" onPress={handleCameraLaunch} />
      </View>

      <TouchableOpacity onPress={uploadImage}>
        <Text>{t('Upload Image')}</Text>
      </TouchableOpacity>

      <FlatList
        data={documents}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.image}</Text>
            <Text>{item.name}</Text>

            <Image
              resizeMode="contain"
              source={{uri: item.image}}
              style={{flex: 1, width: 200, height: 300}}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Photo;
