import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {City, Home, Settings} from '@screens';

// import {SettingsScreen, WeatherScreen} from 'components';
import SettingsIcon from 'react-native-vector-icons/AntDesign';
// import AddIcon from 'react-native-vector-icons/AntDesign';
import AddIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomTab = createBottomTabNavigator();

const settingIcon = (focused: boolean) => {
  return (
    <SettingsIcon color={focused ? 'blue' : 'black'} name="setting" size={24} />
  );
};
const addCountryIcon = (focused: boolean) => {
  return <AddIcon color={focused ? 'blue' : 'black'} name="city" size={24} />;
};

const weatherIcon = (focused: boolean) => {
  return (
    <MaterialCommunityIcons
      color={focused ? 'blue' : 'black'}
      name="weather-hazy"
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
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        })}
      />

      <BottomTab.Screen
        component={City}
        name="City"
        options={() => ({
          tabBarIcon: ({focused}) => addCountryIcon(focused),
          title: 'City',
          headerShown: false,
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
