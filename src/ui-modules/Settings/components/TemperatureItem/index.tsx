import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Modal, Text} from '@components';

import {useAppSettings} from '@redux/hooks/useAppSettings';

import {useStyles} from './styles';

interface ITemperatureItemProps {
  name: string;
  celsiusTemp: string;
  fahrenheitTemp: string;
  keyLanguage?: boolean;
}
const TemperatureItem = ({
  name,
  celsiusTemp,
  fahrenheitTemp,
}: ITemperatureItemProps) => {
  const {temperature, languages, dispatchSetTemperature} = useAppSettings();
  const {styles} = useStyles();

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  return (
    <TouchableOpacity style={styles.container_message} onPress={showModal}>
      <Text h4>{name}</Text>

      <Modal
        celsiusTemp={celsiusTemp}
        fahrenheitTemp={fahrenheitTemp}
        name={name}
        setVisible={setVisible}
        visible={visible}
      />
    </TouchableOpacity>
  );
};

export default TemperatureItem;
