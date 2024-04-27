import {useQuery} from '@tanstack/react-query';

export const useImageCountry = (city_name: string) => {
  // TODO
  const {isLoading, data, error, isError} = useQuery({
    queryKey: ['imageCountryApiUrl'],
  });

  return {isLoading, data, error, isError};
};
