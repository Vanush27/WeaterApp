import {ThemeProvider} from '@rneui/themed';
import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
