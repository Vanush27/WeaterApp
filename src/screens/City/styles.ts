import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_search: {
      flex: 1,
      justifyContent: 'center',
      padding: 15,
      backgroundColor: '#d9dde5',
    },
    search_input: {
      flex: 1,
    },
  });

  return {
    styles,
    theme,
  };
}
