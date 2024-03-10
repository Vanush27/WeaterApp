import {View, Text} from 'react-native';
import {useStyles} from './styles';
import {SettingItem} from '../../ui-modules';
import {Photo} from '@components';

const Settings = () => {
  const {styles} = useStyles();

  const temperature = 'Temperature';

  // const language: string = 'Language';

  const celsiusTemp = '\u00b0 C';
  const fahrenheitTemp = '\u00b0 F';

  const languages = 'ru / en ';

  return (
    <View style={styles.container}>
      {/* <Text>Settings </Text> */}

      <SettingItem
        fahrenheitTemp={fahrenheitTemp}
        celsiusTemp={celsiusTemp}
        name={temperature}
      />

      {/* <SettingItem
        fahrenheitTemp={languages}
        measure={languages}
        name={language}
      /> */}

      {/* <Photo /> */}
    </View>
  );
};

export default Settings;
