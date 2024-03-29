import {colors} from '@assets/colors';
import {size} from '@assets/fonts/size';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    dialog_wrapper: {
      borderRadius: 15,
      width: '80%',
      height: '30%',
    },
    text_checked: {fontSize: size.typography_24, color: colors.teal},
    button: {
      fontSize: size.typography_24,
      margin: 5,
      backgroundColor: 'transparent',
    },
    title: {
      fontSize: size.typography_24,
      color: colors.white,
      fontWeight: '900',
    },
    textPrimary: {
      marginVertical: 20,
      textAlign: 'center',
      fontSize: 20,
      width: 300,
      color: colors.teal,
      fontWeight: '900',
      textTransform: 'uppercase',
    },
  });

  return {
    styles,
    theme,
  };
}
