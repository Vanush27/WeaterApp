import RootNavigator from '@navigators/RootNavigator';
import {AppContextsProvider} from './AppContextsProvider';
import 'react-native-reanimated';

import React from 'react';

const App = () => {
  return (
    <AppContextsProvider>
      <RootNavigator />
    </AppContextsProvider>
  );
};

export default App;
