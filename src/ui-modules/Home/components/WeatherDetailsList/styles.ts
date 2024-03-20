import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';
import {colors} from '@assets/colors';
import {useAppTheme} from '@redux/hooks/useAppTheme';
import {fonts} from '@assets/fonts';
import {lineHeight} from '@assets/fonts/size';

export function useStyles() {
  const {isDarkMode} = useAppTheme();
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    detail_container: {
      height: 150,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    weather_detail_txt: {
      color: isDarkMode ? colors.lightRed : colors.lightGrey,
      textAlign: 'center',
      fontSize: fonts.size.typography_36,
      lineHeight: lineHeight.lineHeight_36,
      fontWeight: '700',
      // marginBottom: 20,
      // alignItems: 'center',
    },
  });

  return {
    styles,
    theme,
  };
}
