import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
  });

  return {
    styles,
    theme,
  };
}
