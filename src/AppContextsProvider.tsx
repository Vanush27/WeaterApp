import {ThemeProvider} from '@rneui/themed';
import React, {ReactNode} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
