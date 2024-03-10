import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();
  const styleSet = {
    normal: StyleSheet.create({
      inputContainerStyle: {
        width: 100,
        backgroundColor: theme.colors?.white,
        borderColor: theme.colors?.primaryGrey,
      },
      errorInputContainerStyle: {
        backgroundColor: 'rgba(255, 242, 242, 1)',
        borderColor: theme.colors?.error,
      },
    }),
    borderless: StyleSheet.create({
      inputContainerStyle: {
        width: 299,
        backgroundColor: theme.colors?.white,
        borderBottomWidth: 0,
        borderColor: 'transparent',
        borderWidth: 0,
        paddingHorizontal: 0,
      },
      errorStyle: {
        display: 'none',
      },
      errorInputContainerStyle: {},
      focusStyle: {},
    }),
    underlined: {
      inputContainerStyle: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.13)',
        paddingHorizontal: 0,
        backgroundColor: theme.colors?.white,
      },
      errorStyle: {
        display: 'none',
      },
      errorInputContainerStyle: {},
      focusStyle: {},
    },
  };

  const sizeStyleSet = {
    small: StyleSheet.create({
      inputContainerStyle: {
        height: 30,
        maxHeight: 30,
      },
    }),
    medium: StyleSheet.create({
      inputContainerStyle: {
        height: 42,
        maxHeight: 42,
      },
    }),
  };

  return {styleSet, sizeStyleSet};
}
