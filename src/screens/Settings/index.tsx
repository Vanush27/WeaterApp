import {View} from 'react-native';
import {useStyles} from './styles';
import {SettingItem} from '../../ui-modules';
import {Photo, Text} from '@components';
import {CELSIUS_TEMP, FAHRENHEIT_TEMP} from '@constants';
import {useAppTranslation} from '@hooks';

const Settings = () => {
  const {styles} = useStyles();

  const temperature = 'Temperature';

  const {t} = useAppTranslation();
  // const language: string = 'Language';

  const languages = 'ru / en ';

  return (
    <View style={styles.container}>
      <Text>{t('Settings')}</Text>

      <SettingItem
        celsiusTemp={CELSIUS_TEMP}
        fahrenheitTemp={FAHRENHEIT_TEMP}
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
