import {StyleSheet} from 'react-native';
import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {lineHeight} from '@assets/fonts/size';

import {useAppTheme} from '@redux/hooks/useAppTheme';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();
  const {isDarkMode} = useAppTheme();

  const styles = StyleSheet.create({
    container_image_card: {
      flex: 1,
    },
    name: {
      color: isDarkMode ? colors?.lavender : colors.success,
      fontFamily: fonts?.family?.monserratItalic,
      fontSize: fonts?.size?.typography_24,
      lineHeight: lineHeight.lineHeight_24,
    },
    header: {
      lineHeight: lineHeight.lineHeight_24,
      color: isDarkMode ? colors?.lavender : colors.success,
      fontFamily: fonts?.family?.monserratBold,
      fontSize: fonts?.size?.typography_30,
      fontWeight: 'bold',
    },

    container: {
      flex: 1,
    },

    image: {
      height: '100%',
    },
    image_card: {
      width: '100%',
      borderBottomColor: 'red',
      borderWidth: 1,
      padding: 16,
      resizeMode: 'cover',
    },

    wrapper_top: {
      flex: 0.3,
      display: 'flex',
      justifyContent: 'center',
      // backgroundColor: 'rgba(255,255,255,0.2)',
      backgroundColor: 'rgba(5,2,0,0.4)',
      // backgroundColor: 'rgba(0,0,0,0.1)',
    },
    wrapper_bootom: {
      flex: 0.7,
      display: 'flex',
      // justifyContent: 'center',
      // paddingTop: 20,

      // alignItems: 'center',
      backgroundColor: 'rgba(5,2,0,0.4)',
    },

    // temp_style: {
    //   fontFamily: theme.fonts?.fontFamily.monserratBold,
    //   fontWeight: '400',
    //   fontSize: size.typography_36,
    //   lineHeight: lineHeight.lineHeight_36,
    //   color: 'rgb(9,34,157)',
    // },
    // not_data_image: {
    //   flex: 1,
    // },
  });

  return {
    styles,
    theme,
  };
}
