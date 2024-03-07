import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Settings} from '../../components';

// import {SettingsScreen, WeatherScreen} from 'components';
import SettingsIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomTab = createBottomTabNavigator();

const settingIcon = (focused: boolean) => {
  return (
    <SettingsIcon color={focused ? 'blue' : 'black'} name="setting" size={24} />
  );
};

const weatherIcon = (focused: boolean) => {
  return (
    <MaterialCommunityIcons
      color={focused ? 'blue' : 'black'}
      name="weather-sunset"
      size={24}
    />
  );
};

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        component={Home}
        name="Home"
        options={() => ({
          tabBarIcon: ({focused}) => weatherIcon(focused),
          title: 'Home',
          headerShown: true,
          tabBarActiveTintColor: 'blue',
        })}
      />

      <BottomTab.Screen
        component={Settings}
        name="Settings"
        options={() => ({
          tabBarIcon: ({focused}) => settingIcon(focused),
          title: 'Settings',
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        })}
      />
    </BottomTab.Navigator>
  );
};
export default BottomNavigator;
