import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Modal, Text} from '@components';

import {useAppTranslation} from '@hooks';
import {useAppSettings} from '@redux/hooks/useAppSettings';

import {useStyles} from './styles';
import {Button, ButtonGroup, Overlay} from '@rneui/themed';
import {colors} from '@assets/colors';
import {ArmeniaFlag, RussiaFlag, USDFlag} from '@assets/icons';

interface ILanguageItemProps {
  name?: string;
  languages?: string;
}

const language_list = [
  {label: 'Armenia', value: 0, icon: <ArmeniaFlag />},
  {label: 'Russian', value: 1, icon: <RussiaFlag />},
  {label: 'English', value: 2, icon: <USDFlag />},
];

const LanguageItem = ({name, languages}: ILanguageItemProps) => {
  const {dispatchSetLanguages} = useAppSettings();

  const {styles} = useStyles();
  const {t} = useAppTranslation();

  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(language_list[0]?.value);

  const showModal = () => {
    setVisible(true);
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleSelect0 = () => {
    // dispatchSetLanguages(celsiusTemp);
    // setIndex(0);
    toggleOverlay();
  };

  const handleSelect1 = () => {
    // dispatchSetLanguages(fahrenheitTemp);
    // setIndex(1);
    toggleOverlay();
  };

  const buttonsList = item => (
    <>
      <View style={styles.icon_lang}>
        {item.icon}
        <Text style={styles.text_lang}>{item.label}</Text>
      </View>
    </>
  );

  return (
    <TouchableOpacity style={styles.container_message} onPress={showModal}>
      <Text h4>{name}</Text>

      <View>
        <Button
          buttonStyle={styles.button}
          title={language_list?.[selectedIndex].label}
          titleStyle={styles.title}
          onPress={toggleOverlay}
        />
        <Overlay
          isVisible={visible}
          overlayStyle={styles.dialog_wrapper}
          onBackdropPress={toggleOverlay}>
          <Text style={styles.textPrimary}>{t(`${name}`)}</Text>

          <ButtonGroup
            buttons={language_list.map(item => {
              return buttonsList(item);
            })}
            containerStyle={{
              flexDirection: 'column',
              height: 150,
            }}
            selectedIndex={selectedIndex}
            onPress={value => {
              setSelectedIndex(value);
              setVisible(false);
            }}
          />
        </Overlay>
      </View>
    </TouchableOpacity>
  );
};

export default LanguageItem;
