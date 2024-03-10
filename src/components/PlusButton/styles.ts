import {DIMENSIONS_WIDTH} from '@constants';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    plus_icon_wrapper: {
      alignItems: 'center',
    },
    plus_btn: {
      backgroundColor: '#f4f4f6',
      padding: 14,
      marginBottom: 120,
      borderRadius: 24,
      marginLeft: DIMENSIONS_WIDTH / 1.8,
    },
  });

  return {
    styles,
    theme,
  };
}
