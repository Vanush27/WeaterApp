import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_weather: {
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#94f15d',
      shadowOpacity: 1,
      elevation: 9,
      // backgroundColor: '#000',
    },
  });

  return {
    styles,
    theme,
  };
}
