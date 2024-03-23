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
      const newObj = {...payload, selected: false};
      const existingObjIndex = state.countryListWeather.findIndex(
        obj => obj?.city?.name === newObj.city.name,
      );

      if (existingObjIndex === -1) {
        state.countryListWeather.push(newObj as never);
      } else {
        state.countryListWeather[existingObjIndex] = newObj;
      }
    },
    deleteCountry: (state, {payload}) => {
      // const cityNameToDelete = payload;

      const updatedCountryListWeather = state.countryListWeather.filter(
        obj => obj?.city?.name !== payload,
      );
      state.countryListWeather = updatedCountryListWeather;
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
  deleteCountry,
  setCurrentCountryItem,
  setCitiesList,
  setCurrentFilteredCitiList,

  setCityName,
} = weatherSlice.actions;

export default weatherSlice.reducer;
