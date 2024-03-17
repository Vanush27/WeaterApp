import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';
import {DIMENSIONS_WIDTH} from '@constants';

export function useStyles() {
  const {theme} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    render_wrapper: {
      width: DIMENSIONS_WIDTH,
      flex: 1,
      borderWidth: 1,
      justifyContent: 'center',
    },
    pagination_style: {position: 'absolute', top: 30, left: 10},
  });

  return {
    styles,
    theme,
  };
}
