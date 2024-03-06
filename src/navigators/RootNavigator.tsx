import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppNavigator from './app-navigator/AppNavigator';

const AppStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen component={AppNavigator} name="AppNavigator" />
      </AppStack.Navigator>
    </>
  );
};

export default RootNavigator;
