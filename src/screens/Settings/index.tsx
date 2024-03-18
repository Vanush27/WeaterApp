import {View} from 'react-native';
import {useStyles} from './styles';
import {Photo, Text} from '@components';
import {CELSIUS_TEMP, FAHRENHEIT_TEMP} from '@constants';
import {useAppTranslation} from '@hooks';
import React from 'react';
import {LanguageItem, TemperatureItem, ThemeModeSwitcher} from '@ui-modules';

// import THEME from '@assets/icons/theme';
// import SettingsScreenIcons from '../utils/SettingsScreenIcons';

const Settings = () => {
  const {styles} = useStyles();

  const temperature = 'Temperature';
  const language = 'Language';
  const {t} = useAppTranslation();

  const languages = ['ru', 'en', 'arm'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('Settings')}</Text>

      <View style={styles.theme_wrapper}>
        <ThemeModeSwitcher />
      </View>

      <View style={styles.item_wrapper}>
        <TemperatureItem
          celsiusTemp={CELSIUS_TEMP}
          fahrenheitTemp={FAHRENHEIT_TEMP}
          name={temperature}
        />
      </View>
      <View style={styles.item_wrapper}>
        <LanguageItem name={language} />
      </View>

      {/* <Photo /> */}
    </View>
  );
};

export default Settings;
