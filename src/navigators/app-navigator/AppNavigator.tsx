import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from '../bottom-navigator/BottomNavigator';
import {AddCity, UploadImage} from '@ui-modules';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen component={BottomNavigator} name="BottomNavigator" />
      <AppStack.Screen component={AddCity} name="AddCity" />
      <AppStack.Screen component={UploadImage} name="UploadImage" />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
