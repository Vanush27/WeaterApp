import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_country: {
      backgroundColor: '#f4f4f6',
      borderRadius: 15,
      padding: 10,
      margin: 15,
      height: 90,
    },

    select_item: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  return {
    styles,
    theme,
  };
}
