import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      paddingTop: 70,
    },
  });

  return {
    styles,
    theme,
  };
}
