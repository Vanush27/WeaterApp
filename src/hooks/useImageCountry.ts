import {useQuery} from '@tanstack/react-query';
import {getImageCountry} from '@api';

export const useImageCountry = ({city_name}: TCityName) => {
  // const {isLoading, data, error, isError} = useQuery();
  // ['imageCountryApiUrl'],
  // async () => getImageCountry({city_name}),
  // return {isLoading, data, error, isError};
};
type TCityName = {
  city_name?: string;
};
