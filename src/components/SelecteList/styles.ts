import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    select_item: {
      padding: 20,
      // backgroundColor: item.selected ? 'yellow' : 'white',
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
