import {DIMENSIONS_WIDTH} from '@constants';
import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = (backgroundColor?: string) =>
    StyleSheet.create({
      plus_icon_wrapper: {
        // flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
      },
      plus_btn: {
        backgroundColor: backgroundColor,
        padding: 15,
        borderRadius: 30,
        marginLeft: DIMENSIONS_WIDTH / 1.8,
      },
    });

  return {
    styles,
    theme,
  };
}
