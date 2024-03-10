import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      // backgroundColor: '#ccc',
      // flex: 1,
    },
    render_wrapper: {
      // flex: 1,
      // borderWidth: 1,
      // justifyContent: 'center',
    },
    render_index: {textAlign: 'center', fontSize: 30},
  });

  return {
    styles,
    theme,
  };
}
