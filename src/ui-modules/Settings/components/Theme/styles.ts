import {size} from '@assets/fonts/size';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'column',
    },
    title_wrapper: {
      flexDirection: 'row',
      margin: 5,
    },
    title: {
      fontSize: size.typography_18,
      fontWeight: '700',
      marginLeft: 10,
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    wrapper_theme: {
      alignItems: 'center',
      padding: 20,
      borderRadius: 15,
    },
  });

  return {
    styles,
    theme,
  };
}
