import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ThemeStats} from '@ui-modules';

type TInitialState = {
  languages: string;
  temperature: string;

  themeStats: ThemeStats;
  isDarkMode: boolean;
};

export const initialState: TInitialState = {
  languages: '',
  temperature: '\u00b0 C',

  themeStats: ThemeStats.LIGHT,
  isDarkMode: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },

    setTemperature: (state, action) => {
      state.temperature = action.payload;
    },

    setThemeVariant: (state, action: PayloadAction<ThemeStats>) => {
      state.themeStats = action.payload;
    },
  },
});

export const {setLanguages, setTemperature, setThemeVariant} =
  settingsSlice.actions;

export default settingsSlice.reducer;
