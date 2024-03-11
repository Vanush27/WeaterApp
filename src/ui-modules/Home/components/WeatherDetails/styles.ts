import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';
import {colors} from '@assets/colors';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    box_wrapper: {
      backgroundColor: colors.detail_weather,
      borderWidth: 1,
      borderColor: colors.detail_border,
      height: 120,
      width: 150,
      borderRadius: 16,
    },

    wrapper_header: {
      flexDirection: 'row',
      margin: 5,
      width: '80%',
      alignItems: 'flex-start',
    },
    header_text: {
      color: colors.tan,
      marginLeft: 15,
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: 16,
    },
    icon: {height: 32, width: 32, tintColor: colors.lighterGrey},

    measure_wrapper: {
      // width: '100%',
      // margin: 10,

      flexDirection: 'row',
      // justifyContent: 'flex-start',
      // alignItems: 'center',
      justifyContent: 'center',
    },
    measure_weather: {
      color: colors.tan,
      fontSize: 22,
      fontWeight: '700',
    },
    measure_si_unit: {
      color: colors.tan,
      fontSize: 22,
      marginLeft: 5,
      fontWeight: '700',
    },
  });

  return {
    styles,
    theme,
  };
}
