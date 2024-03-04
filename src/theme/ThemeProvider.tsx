import type {ReactNode} from 'react';
import {ThemeProvider as RNEThemeProvider} from '@rneui/themed';
import {theme} from '@assets';

const ThemeProvider = ({children}: IThemeProviderProps) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <RNEThemeProvider theme={theme}>{children}</RNEThemeProvider>;
};

interface IThemeProviderProps {
  children: ReactNode;
}

export default ThemeProvider;
