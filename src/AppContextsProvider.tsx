import React, {ReactNode} from 'react';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store, persist} from '@redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import i18n from '@i18n/i18n.config';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
