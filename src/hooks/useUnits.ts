import {METRIC} from '@constants';
import {useAsyncStorage} from './useAsyncStorage';

export const useUnits = () => {
  const {getItem, setItem} = useAsyncStorage();

  const setMeasureUnits = async (value: any) => {
    try {
      await setItem(METRIC, JSON.stringify(value));
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const getMeasureUnits = async () => {
    try {
      const value = await getItem(METRIC);
      if (value != null) {
        return JSON.parse(value);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {setMeasureUnits, getMeasureUnits};
};
