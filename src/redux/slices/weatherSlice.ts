import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {ICountryListWeather} from '@types/Weather';
import {ICountryListWeather} from '../../types/Weather';

type IInitialState = {
  error: boolean;
  isLoading: boolean;

  countryListWeather: ICountryListWeather[] | [];
  currentWeather: ICountryListWeather | undefined;

  citiesList: string[];
  currentFilteredCitiList: [];

  cityName: string;
};

export const initialState: IInitialState = {
  error: false,
  isLoading: false,
  countryListWeather: [],
  currentWeather: undefined,
  citiesList: [],
  currentFilteredCitiList: [],

  cityName: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setCountryList: (state, action: PayloadAction<ICountryListWeather[]>) => {
      state.countryListWeather = action.payload;
    },

    setCurrentCountryItem: (
      state,
      action: PayloadAction<ICountryListWeather>,
    ) => {
      state.currentWeather = action.payload;
    },

    addCountry: (state, {payload}) => {
      const newObj = payload;
      const existingObj = state.countryListWeather.find(
        obj => obj?.city?.name === newObj.city.name,
      );
      if (!existingObj) {
        state.countryListWeather.push(newObj as never);
      }
    },
    setCitiesList: (state, action) => {
      state.citiesList = action.payload;
    },

    setCurrentFilteredCitiList: (state, action) => {
      state.currentFilteredCitiList = action.payload;
    },

    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
  },
});

export const {
  setLoading,
  addCountry,
  setCurrentCountryItem,
  setCitiesList,
  setCurrentFilteredCitiList,

  setCityName,
} = weatherSlice.actions;

export default weatherSlice.reducer;
