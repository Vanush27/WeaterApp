import {ThemeProvider} from '@rneui/themed';
import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store, persist} from '@redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import i18n from '@i18n/i18n.config';

export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
              <NavigationContainer>{children}</NavigationContainer>
            </PersistGate>
          </Provider>
        </I18nextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
