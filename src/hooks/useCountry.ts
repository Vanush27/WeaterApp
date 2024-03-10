import {useAppDispatch, useAppSelector} from '@hooks';

import {setCityName} from '@redux/slices/weatherSlice';

export const useCountry = () => {
  const dispatch = useAppDispatch();

  const {cityName} = useAppSelector(state => state.weather);

  const dispatchSetCityName = async (city: string) => {
    await dispatch(setCityName(city));
  };

  return {
    cityName,
    dispatchSetCityName,
  };
};
