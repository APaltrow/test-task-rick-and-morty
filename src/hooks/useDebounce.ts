import { useCallback, useRef } from 'react';

export const useDebounce = (delay: number, callback: (val: string) => void) => {
  const timer = useRef<null | NodeJS.Timeout>(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [delay, callback],
  );

  return debouncedCallback;
};
