import AsyncStorage from '@react-native-async-storage/async-storage';

import weatherReducer from './slices/weatherSlice';
import settingsReducer from './slices/settingsSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const persistConfig = {
  key: 'persist-store-weather',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  weather: weatherReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
