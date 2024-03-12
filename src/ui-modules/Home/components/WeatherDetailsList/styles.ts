import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';
import {colors} from '@assets/colors';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    detail_container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    weather_detail_txt: {
      color: colors.white,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 20,
    },
  });

  return {
    styles,
    theme,
  };
}
