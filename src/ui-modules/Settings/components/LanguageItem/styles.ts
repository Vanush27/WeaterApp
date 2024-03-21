import {colors} from '@assets/colors';
import {size} from '@assets/fonts/size';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_message: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    dialog_wrapper: {
      borderRadius: 15,
      width: '90%',
      height: '40%',
    },
    icon_lang: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    text_lang: {
      fontSize: size.typography_18,
      color: colors.teal,
      fontWeight: '900',
      marginLeft: 90,
    },
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
