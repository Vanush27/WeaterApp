import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {DIMENSIONS_HEIGHT} from '@constants';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_location: {
      height: DIMENSIONS_HEIGHT,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    wrapper_search: {
      justifyContent: 'center',

      marginTop: 100,
    },
  });

  return {
    styles,
    theme,
  };
}
