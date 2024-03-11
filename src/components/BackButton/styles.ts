import {StyleSheet} from 'react-native';
import {colors} from '@assets/colors';
import {IS_ANDROID} from '@constants';

export function useStyles() {
  const styles = StyleSheet.create({
    styled_button: {
      // backgroundColor: colors?.white,
      position: 'absolute',
      zIndex: 1,
      // top: IS_ANDROID ? 40 : 200,
      // left: IS_ANDROID ? 0 : 300,
    },
    un_styled_button: {
      // backgroundColor: colors?.primaryGrey,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });

  return {
    styles,
  };
}
