import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    button: {
      margin: 10,
    },
    textPrimary: {
      marginVertical: 20,
      textAlign: 'center',
      fontSize: 20,
    },
    textSecondary: {
      width: 300,
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 17,
    },
  });

  return {
    styles,
    theme,
  };
}
