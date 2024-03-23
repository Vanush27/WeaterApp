import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#d9dde5',
    },
    country_list: {
      flex: 0.8,
    },

    plus_btn_wrapper: {
      marginTop: 30,
      flex: 0.2,
    },
    all_select: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  });

  return {
    styles,
    theme,
  };
}
