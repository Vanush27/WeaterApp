import React, {FC, useState} from 'react';
import {Button, Overlay, Icon, CheckBox} from '@rneui/themed';
import {View, Text} from 'react-native';
import {useStyles} from './styles';
import {useAppSettings} from '@redux/hooks/useAppSettings';
import {useAppTranslation} from '@hooks';
import {colors} from '@assets/colors';

type TOverlayComponentProps = {
  name: string;
  celsiusTemp: string;
  fahrenheitTemp: string;
  keyLanguage?: boolean;
  visible: boolean;
  setVisible?: any;
};

const Modal: FC<TOverlayComponentProps> = ({
  name,
  celsiusTemp,
  fahrenheitTemp,
  keyLanguage,
  visible = true,
  setVisible,
}) => {
  const {temperature, languages, dispatchSetTemperature} = useAppSettings();
  const {t} = useAppTranslation();

  const [selectedIndex, setIndex] = useState(0);

  const {styles} = useStyles();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleSelect0 = () => {
    dispatchSetTemperature(celsiusTemp);
    setIndex(0);
    toggleOverlay();
  };

  const handleSelect1 = () => {
    dispatchSetTemperature(fahrenheitTemp);
    setIndex(1);
    toggleOverlay();
  };

  return (
    <View>
      <Button
        buttonStyle={styles.button}
        title={temperature}
        titleStyle={styles.title}
        onPress={toggleOverlay}
      />
      <Overlay
        isVisible={visible}
        overlayStyle={styles.dialog_wrapper}
        onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>{t(`${name}`)}</Text>

        <CheckBox
          checked={selectedIndex === 0}
          checkedColor={colors.error}
          checkedIcon="dot-circle-o"
          textStyle={styles.text_checked}
          title={celsiusTemp}
          uncheckedIcon="circle-o"
          onPress={handleSelect0}
        />
        <CheckBox
          checked={selectedIndex === 1}
          checkedColor={colors.error}
          checkedIcon="dot-circle-o"
          textStyle={styles.text_checked}
          title={fahrenheitTemp}
          uncheckedIcon="circle-o"
          onPress={handleSelect1}
        />
      </Overlay>
    </View>
  );
};

export default Modal;
