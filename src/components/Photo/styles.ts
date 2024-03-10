import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    marginTop: {
      marginTop: 20,
    },
  });

  return {
    styles,
    theme,
  };
}
