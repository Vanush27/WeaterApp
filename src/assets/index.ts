import {createTheme} from '@rneui/themed';
import {colors} from './colors';
import {fonts} from './fonts';
import {getTextTheme} from '@components';

export const lightTheme = createTheme({
  components: {
    // Button: getButtonTheme(colors, fonts),
    // Text: getTextTheme(colors, fonts),
    // Input: getInputTheme(colors, fonts),
  },
  ...colors,
  ...fonts,
});
