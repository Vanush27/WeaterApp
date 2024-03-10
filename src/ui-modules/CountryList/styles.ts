import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    indicator_activity: {
      position: 'absolute',
      flexDirection: 'row',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      marginTop: 0,
    },
    flat_list: {
      borderRadius: 10,
      margin: 15,
      width: '90%',
      backgroundColor: '#f3f0f0',
    },
  });

  return {
    styles,
    theme,
  };
}
