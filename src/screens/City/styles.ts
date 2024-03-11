import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 15,
      backgroundColor: '#d9dde5',
    },
    country_list: {
      flex: 0.8,
    },
    container_country: {
      backgroundColor: '#f4f4f6',
      borderRadius: 15,
      padding: 10,
      margin: 15,
    },
    plus_btn_wrapper: {
      flex: 0.2,
    },
  });

  return {
    styles,
    theme,
  };
}
