import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Modal, Text} from '@components';
import {useStyles} from './styles';
import {CheckBox} from '@rneui/base';
import {useUnits} from '@hooks';
import {useAppSettings} from '@redux/hooks/useAppSettings';

const SettingItem = ({
  name,
  celsiusTemp,
  fahrenheitTemp,
}: {
  name: string;
  celsiusTemp: string;
  fahrenheitTemp: string;
}) => {
  const {temperature, languages, dispatchSetTemperature} = useAppSettings();
  const {styles} = useStyles();

  //todo    1.change name index && <any>
  //        2.It'd be better if you create a separate modal component with the styles
  //        which you are going to use all the time, instead of recreating the same modal in different places
  //        use react-native-modalfy
  //

  // const [selectedIndex, setIndex] = React.useState(0);
  // const [visible, setVisible] = useState(false);

  // const [temperatureType, setTemperatureType] = useState(measure);

  const [unitsType, setUnitsTypeType] = useState<string | null>(null);

  const {getMeasureUnits} = useUnits();

  const getMetricTypeFromStorage = async () => {
    try {
      const unit = await getMeasureUnits();
      setUnitsTypeType(unit);
    } catch (e) {
      console.log(e, 'getMetricTypeFromStorage');
    }
  };

  const showModal = () => {
    // setVisible(true);
  };
  // const hideModal = () => {
  //   setVisible(false);
  // };

  // const closeModal = index => {
  //   setIndex(index);
  //   setVisible(false);
  // };

  return (
    <TouchableOpacity style={styles.container_message} onPress={showModal}>
      <Text h4>{name}</Text>

      {/* <Text h2>{temperature}</Text> */}

      <Modal
        celsiusTemp={celsiusTemp}
        fahrenheitTemp={fahrenheitTemp}
        name={name}
      />
      {/* <Text h4>{measure}</Text> */}
      <View>
        {/* <Modal
          animationType="fade"
          visible={visible}
          onRequestClose={hideModal}>
          <View>
            <Text h4>{name}</Text>

            <TouchableOpacity
              style={styles.radio_btn}
              onPress={() => closeModal(0)}>
              <CheckBox
                checked={selectedIndex === 0}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={() => {
                  dispatchSetTemperature(measure);
                  closeModal(0);
                }}
              />
              <Text h4>{measure}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radio_btn}
              onPress={() => {
                dispatchSetTemperature(fahrenheitTemp);
                closeModal(1);
              }}>
              <CheckBox
                checked={selectedIndex === 1}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <Text h4>{fahrenheitTemp}</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
