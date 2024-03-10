import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {DIMENSIONS_HEIGHT} from '@constants';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_location: {
      flex: 1,
      height: DIMENSIONS_HEIGHT,
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: '#a6a6b0',
    },
  });

  return {
    styles,
    theme,
  };
}
