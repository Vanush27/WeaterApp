import '@rneui/themed';
// import {IFonts} from 'src/assets/theme/fonts';
// import {IThemeColors} from 'src/assets/theme/colors';

declare module '@rneui/themed' {
  export interface Theme {
    // fonts: IFonts;
    // colors: IThemeColors;
    // components: IComponentTheme;
  }

  // export interface IComponentTheme<T> {
  //   (props: {colors: IThemeColors; fonts: IFonts}): T;
  // }
}
