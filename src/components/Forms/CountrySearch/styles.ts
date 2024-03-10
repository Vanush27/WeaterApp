import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container_input: {
      width: '100%',
      marginTop: 90,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      borderWidth: 2,
      borderBottomWidth: 2,
      borderColor: '#27bbb1',
    },
  });

  return {
    styles,
    theme,
  };
}
