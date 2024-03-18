import React, {useState} from 'react';
import {Appearance, TouchableOpacity, View} from 'react-native';
import ThemeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppSettings} from '@redux/hooks/useAppSettings';
import {DARK_THEME, LIGHT_THEME} from '@assets/icons';
import {ThemeStats} from '../../types/ThemeStats';
import {useAppTranslation} from '@hooks';
import {CheckBox} from '@rneui/themed';
import {colors} from '@assets/colors';
import {Text} from '@components';

import {useStyles} from './styles';

const ThemeModeSwitcher = () => {
  const {dispatchSetTheme, themeStats} = useAppSettings();
  const isDark = themeStats === 'dark';

  const [selectedIndex, setIndex] = useState(0);

  const {t} = useAppTranslation();
  const {styles} = useStyles();

  const handleDarkTheme = () => {
    setIndex(0);
    dispatchSetTheme(ThemeStats.DARK);
  };

  const handleLightTheme = () => {
    setIndex(1);
    dispatchSetTheme(ThemeStats.LIGHT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_wrapper}>
        <ThemeIcon
          color={isDark ? 'white' : 'black'}
          name="theme-light-dark"
          size={26}
        />
        <Text style={styles.title}>{t('Theme')}</Text>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.wrapper_theme}
          onPress={handleDarkTheme}>
          <DARK_THEME height={180} width={150} />
          <CheckBox
            checked={selectedIndex === 0}
            checkedColor={colors.error}
            checkedIcon="dot-circle-o"
            containerStyle={{backgroundColor: 'transparent'}}
            uncheckedIcon="circle-o"
          />
        </TouchableOpacity>
        {/*  */}

        <TouchableOpacity
          style={styles.wrapper_theme}
          onPress={handleLightTheme}>
          <LIGHT_THEME height={180} width={150} />
          <CheckBox
            checked={selectedIndex === 1}
            checkedColor={colors.error}
            checkedIcon="dot-circle-o"
            containerStyle={{backgroundColor: 'transparent'}}
            uncheckedIcon="circle-o"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThemeModeSwitcher;
