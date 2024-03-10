import {IThemeColors} from '@assets/colors';
import {IFonts} from '@assets/fonts';
import {lineHeight} from '@assets/fonts/size';

export const getTextTheme = (
  colors: IThemeColors,
  fonts: IFonts,
): undefined | any => ({
  h1Style: {
    fontFamily: fonts?.family?.monserratItalic,
    fontSize: fonts.size?.typography_60,
    lineHeight: lineHeight.lineHeight_60,
    color: colors?.success,
    flexShrink: 1,
    textTransform: 'uppercase',
    fontWeight: '100',
  },
  h2Style: {
    fontFamily: fonts?.family?.monserratItalic,
    fontSize: fonts?.size.typography_48,
    color: colors.yellow,
    lineHeight: lineHeight.lineHeight_48,
    fontWeight: '100',
  },
  h3Style: {
    fontFamily: fonts?.family?.monserratItalic,
    fontSize: fonts?.size.typography_36,
    lineHeight: lineHeight.lineHeight_36,
    color: colors?.success,
    flexShrink: 1,
  },
  h4Style: {
    fontFamily: fonts?.family?.monserratItalic,
    fontSize: fonts?.size?.typography_24,
    lineHeight: lineHeight.lineHeight_24,
    color: colors?.lavender,
    flexShrink: 1,
  },

  style: {
    fontFamily: fonts?.family?.monserratItalic,
    fontSize: fonts.size.typography_10,
    lineHeight: lineHeight.lineHeight_10,
    color: colors?.error,
    flexShrink: 1,
  },
  allowFontScaling: true,
});
