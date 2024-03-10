import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TInitialState = {
  languages: string;
  temperature: string;
};

export const initialState: TInitialState = {
  languages: '',
  temperature: '\u00b0 C',
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
  },
});

export const {setLanguages, setTemperature} = settingsSlice.actions;

export default settingsSlice.reducer;
