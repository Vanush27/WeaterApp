import type {ReactNode} from 'react';
import {ThemeProvider as RNEThemeProvider} from '@rneui/themed';
import {theme} from '@assets';

const ThemeProvider = ({children}: IThemeProviderProps) => {
  return <RNEThemeProvider theme={theme}>{children}</RNEThemeProvider>;
};

interface IThemeProviderProps {
  children: ReactNode;
}

export default ThemeProvider;
