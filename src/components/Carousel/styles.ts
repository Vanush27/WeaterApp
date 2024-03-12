import {DIMENSIONS_WIDTH} from '@constants';
import {useTheme} from '@rneui/themed';
import {Dimensions, StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();
  // const {width} = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: '#ccc',
      flex: 1,
    },
    render_wrapper: {
      width: DIMENSIONS_WIDTH,
      flex: 1,
      borderWidth: 1,
      justifyContent: 'center',
    },
    render_index: {textAlign: 'center', fontSize: 30, color: 'red'},
    child: {width: DIMENSIONS_WIDTH, justifyContent: 'center'},
    text: {fontSize: DIMENSIONS_WIDTH * 0.1, textAlign: 'center'},
  });

  return {
    styles,
    theme,
  };
}
