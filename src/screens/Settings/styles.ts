import {colors} from '@assets/colors';
import {size} from '@assets/fonts/size';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.lightGold,
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    theme_wrapper: {
      width: '100%',
    },
    title: {
      fontSize: size.typography_30,
      fontWeight: '700',
    },
    item_wrapper: {
      backgroundColor: '#ccc',
      width: '100%',
      borderBlockColor: 'red',
      borderWidth: 2,
    },
  });

  return {
    styles,
    theme,
  };
}
