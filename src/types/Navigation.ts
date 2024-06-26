import {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';

import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

// export interface BottomNavigationProps<
//   RouteName extends keyof BottomNavigationRoutes,
// > {
//   navigation: BottomTabNavigationProp<BottomNavigationRoutes, RouteName>;
//   route: RouteProp<BottomNavigationRoutes, RouteName>;
// }

// export interface MainNavigationProps<
//   RouteName extends keyof MainNavigationRoutes,
// > {
//   navigation: StackNavigationProp<MainNavigationRoutes, RouteName>;
//   route: RouteProp<MainNavigationRoutes, RouteName>;
// }

//
export type TCountry = {
  AddCity: undefined;
  // UploadImage: undefined;
};

export type MainNavigationRoutes = {
  AddCity: undefined;
  UploadImage: undefined;
};

export type BottomNavigationRoutes = {
  Home: undefined;
  City: undefined;
  Settings: undefined;
};

export type TBottomTabScreenProps<TScreen extends keyof TCountry> =
  NativeStackScreenProps<TCountry, TScreen>;

export type TScreenProps<TScreen extends keyof MainNavigationRoutes> =
  CompositeScreenProps<
    NativeStackScreenProps<MainNavigationRoutes, TScreen>,
    CompositeScreenProps<
      BottomTabScreenProps<TCountry>,
      NativeStackScreenProps<MainNavigationRoutes>
    >
  >;

export type TRootScreens = {
  Main: NavigatorScreenParams<MainNavigationRoutes | undefined>;
  Home: BottomNavigationRoutes;
};
