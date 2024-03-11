import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'blue',
    },
  });

  return {
    styles,
    theme,
  };
}
