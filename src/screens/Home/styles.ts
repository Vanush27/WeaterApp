import {useTheme} from '@rneui/themed';
import {Dimensions, StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      // padding: 15,
      backgroundColor: '#d9dde5',
    },
  });

  return {
    styles,
    theme,
  };
}
