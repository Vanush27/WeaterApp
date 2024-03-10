import React, {useState} from 'react';
import {Button, Overlay, Icon, CheckBox} from '@rneui/themed';
import {View, Text} from 'react-native';
import {useStyles} from './styles';
import {useAppSettings} from '@redux/hooks/useAppSettings';
import {useAppTranslation} from '@hooks';

type TOverlayComponentProps = {
  name: string;
  celsiusTemp: string;
  fahrenheitTemp: string;
};

const Modal: React.FunctionComponent<TOverlayComponentProps> = ({
  name,
  celsiusTemp,
  fahrenheitTemp,
}) => {
  const {temperature, languages, dispatchSetTemperature} = useAppSettings();
  const {t} = useAppTranslation();

  const [visible, setVisible] = useState(false);
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
        title={temperature}
        onPress={toggleOverlay}
        buttonStyle={styles.button}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>{t('Hello')}</Text>
        <Text style={styles.textSecondary}>{name}</Text>
        <CheckBox
          checked={selectedIndex === 0}
          onPress={handleSelect0}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          title={celsiusTemp}
        />
        <CheckBox
          checked={selectedIndex === 1}
          onPress={handleSelect1}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          title={fahrenheitTemp}
        />
      </Overlay>
    </View>
  );
};

export default Modal;
