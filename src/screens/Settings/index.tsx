import {SafeAreaView, View} from 'react-native';
import {useStyles} from './styles';
import {Text} from '@components';
import {CELSIUS_TEMP, FAHRENHEIT_TEMP} from '@constants';
import {useAppTranslation} from '@hooks';
import React from 'react';
import {
  LanguageItem,
  TemperatureItem,
  ThemeModeSwitcher,
  CustomPhoto,
} from '@ui-modules';

const Settings = () => {
  const {styles} = useStyles();

  const temperature = 'temperature';
  const language = 'Language';
  const {t} = useAppTranslation();

  const languages = ['ru', 'en', 'arm'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('Settings')}</Text>

      <View style={styles.theme_wrapper}>
        <ThemeModeSwitcher />
      </View>

      <View style={styles.item_wrapper}>
        <TemperatureItem
          celsiusTemp={CELSIUS_TEMP}
          fahrenheitTemp={FAHRENHEIT_TEMP}
          name={t(`${temperature}`)}
        />
      </View>
      <View style={styles.item_wrapper}>
        <LanguageItem name={t(`${language}`)} />
      </View>

      <CustomPhoto />
    </SafeAreaView>
  );
};

export default Settings;
