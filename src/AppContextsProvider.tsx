import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {I18nextProvider} from 'react-i18next';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persist} from '@redux/store';
import ThemeProvider from './theme/ThemeProvider';
import i18n from '@i18n/i18n.config';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getInitialSafeAreaMetrics} from '@utils/getInitialSafeAreaMetrics';

export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider initialMetrics={getInitialSafeAreaMetrics}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <I18nextProvider i18n={i18n}>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                  <NavigationContainer>{children}</NavigationContainer>
                </PersistGate>
              </Provider>
            </I18nextProvider>
          </GestureHandlerRootView>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
