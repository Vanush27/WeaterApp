import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from '../bottom-navigator/BottomNavigator';
import {AddCity} from '@ui-modules';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen component={BottomNavigator} name="BottomNavigator" />
      <AppStack.Screen component={AddCity} name="AddCity" />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
