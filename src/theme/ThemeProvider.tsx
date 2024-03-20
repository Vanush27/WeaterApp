import type {ReactNode} from 'react';
import {ThemeProvider as RNEThemeProvider} from '@rneui/themed';
import {lightTheme} from '@assets';
import {useAppTheme} from '@redux/hooks/useAppTheme';

const ThemeProvider = ({children}: IThemeProviderProps) => {
  // const {getTheme} = useAppTheme();
  // theme={getTheme(lang, themeVariant)}
  return <RNEThemeProvider theme={lightTheme}>{children}</RNEThemeProvider>;
};

interface IThemeProviderProps {
  children: ReactNode;
}

export default ThemeProvider;
