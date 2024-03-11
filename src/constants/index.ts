import {Dimensions, Platform} from 'react-native';

export const DIMENSIONS_WIDTH = Dimensions.get('window').width;
export const DIMENSIONS_HEIGHT = Dimensions.get('window').height;

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const ALREADY_LAUNCHED = 'ALREADY_LAUNCHED';

export const LOCALE_PERSISTENCE_KEY = 'i18next-language';

export const METRIC = 'metric';
export const IMPERIAL = 'imperial';

// number
export const THOUSAND = 1000;

export const H_MAX_HEIGHT = DIMENSIONS_HEIGHT / 1.1;
export const H_MIN_HEIGHT = 250;
export const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;
