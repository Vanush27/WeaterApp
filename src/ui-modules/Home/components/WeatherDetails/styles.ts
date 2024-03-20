import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';
import {colors} from '@assets/colors';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    box_wrapper: {
      // backgroundColor: colors.detail_weather,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 2,
      borderColor: colors.detail_border,
      width: 150,
      borderRadius: 16,
      marginTop: 20,
    },

    wrapper_header: {
      flexDirection: 'row',
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    header_text: {
      color: colors.tan,
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: 20,
    },
    icon: {height: 30, width: 30, tintColor: colors.lighterGrey},

    measure_wrapper: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    measure_weather: {
      color: colors.tan,
      fontSize: 28,
      fontWeight: '900',
    },
    measure_si_unit: {
      color: colors.tan,
      fontSize: 28,
      marginLeft: 5,
      fontWeight: '700',
    },
  });

  return {
    styles,
    theme,
  };
}
