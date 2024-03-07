import {useState, useEffect} from 'react';

export function useDebounce<T>(value: T, milliSeconds?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(value),
      milliSeconds || 500,
    );

    return () => {
      clearTimeout(timer);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
}
