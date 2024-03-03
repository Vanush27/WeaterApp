import React, {ReactNode} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  return (
    <SafeAreaProvider>
      <>{children}</>
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
