import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_weather: {
      margin: 8,
      backgroundColor: '#94f15d',
    },
  });

  return {
    styles,
    theme,
  };
}
