import {colors} from '@assets/colors';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      backgroundColor: colors.lightGold,
    },
  });

  return {
    styles,
    theme,
  };
}
