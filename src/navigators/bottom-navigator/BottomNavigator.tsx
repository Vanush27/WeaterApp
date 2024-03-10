import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Country, Home, Settings} from '@screens';

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
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        })}
      />

      <BottomTab.Screen
        component={Country}
        name="Country"
        options={() => ({
          tabBarIcon: ({focused}) => addCountryIcon(focused),
          title: 'Country',
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
