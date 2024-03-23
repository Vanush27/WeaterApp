import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_weather: {
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#94f15d',
      shadowOpacity: 0.7,
      elevation: 3,
      backgroundColor: '#ccc',

      shadowRadius: 2,
    },
  });

  return {
    styles,
    theme,
  };
}
