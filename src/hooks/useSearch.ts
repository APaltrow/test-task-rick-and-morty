import { useState } from 'react';

import { fetchCharactersThunk, fetchSearchThunk, useAppDispatch } from '@redux';

import { useDebounce } from './useDebounce';

export const useSearch = (error: string) => {
  if (error) {
    localStorage.setItem('search', '');
  }

  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('search') || '',
  );

  const dispatch = useAppDispatch();
  const debouncedFetch = useDebounce(400, (val: string) =>
    dispatch(fetchSearchThunk(val)),
  );

  const onSearch = (val: string) => {
    setSearchValue(val);
    localStorage.setItem('search', val);

    if (!val) {
      dispatch(fetchCharactersThunk());
      return;
    }

    debouncedFetch(val);
  };

  return {
    searchValue,
    onSearch,
  };
};
