import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_message: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 30,
    },
    radio_btn: {
      alignItems: 'center',
      margin: 4,
      flexDirection: 'row',
    },
  });

  return {
    styles,
    theme,
  };
}
