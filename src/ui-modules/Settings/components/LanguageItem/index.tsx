import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '@components';

import {useAppTranslation} from '@hooks';

import {Button, ButtonGroup, Overlay} from '@rneui/themed';
import {ArmeniaFlag, RussiaFlag, USDFlag} from '@assets/icons';

import {ILanguageList} from '../../types/Language';
import {useStyles} from './styles';

const LANGAUGE_LIST: ILanguageList[] = [
  {label: 'Armenia', cca2: 'arm', value: 0, icon: <ArmeniaFlag />},
  {label: 'Russian', cca2: 'ru', value: 1, icon: <RussiaFlag />},
  {label: 'English', cca2: 'en', value: 2, icon: <USDFlag />},
];

interface ILanguageItemProps {
  name?: string;
}

const LanguageItem = ({name}: ILanguageItemProps) => {
  const {changeLng} = useAppTranslation();

  const {styles} = useStyles();
  const {t} = useAppTranslation();

  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(LANGAUGE_LIST[0]?.value);

  const showModal = () => {
    setVisible(true);
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleButton = (value: number) => {
    const selectedLanguage = LANGAUGE_LIST.find(item => item.value === value);
    if (selectedLanguage) {
      const cca2 = selectedLanguage.cca2;
      changeLng(cca2);
    }
    setSelectedIndex(value);
    setVisible(false);
  };

  const buttonsList = (item: ILanguageList) => (
    <View style={styles.icon_lang}>
      {item.icon}
      <View style={styles.text_lang}>
        <Text>{item.label}</Text>
      </View>
    </View>
  );

  return (
    <TouchableOpacity style={styles.container_message} onPress={showModal}>
      <Text h4>{t(`${name}`)}</Text>

      <Button
        buttonStyle={styles.button}
        title={LANGAUGE_LIST?.[selectedIndex]?.label}
        titleStyle={styles.title}
        onPress={toggleOverlay}
      />
      <Overlay
        isVisible={visible}
        overlayStyle={styles.dialog_wrapper}
        onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>{t(`${name}`)}</Text>

        <ButtonGroup
          selectedIndex={selectedIndex}
          buttons={LANGAUGE_LIST.map(item => {
            return buttonsList(item);
          })}
          containerStyle={{
            flexDirection: 'column',
            height: 150,
          }}
          onPress={value => handleButton(value)}
        />
      </Overlay>
    </TouchableOpacity>
  );
};

export default LanguageItem;
