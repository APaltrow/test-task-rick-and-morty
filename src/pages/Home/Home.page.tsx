import { FC, useEffect } from 'react';

import { SearchBar, Logo, Error, Loader, CharactersList } from '@components';
import { useSearch } from '@hooks/useSearch';
import {
  useAppSelector,
  useAppDispatch,
  getCharactersState,
  fetchCharactersThunk,
  fetchSearchThunk,
} from '@redux';

// import style from './Home.module.scss';

export const HomePage: FC = () => {
  const { characters, status, error } = useAppSelector(getCharactersState);

  const dispatch = useAppDispatch();
  const { searchValue, onSearch } = useSearch(error);

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchSearchThunk(searchValue));

      return;
    }

    dispatch(fetchCharactersThunk());
  }, []);

  return (
    <>
      <Logo />

      <SearchBar
        value={searchValue}
        onSearch={onSearch}
      />

      {status === 'pending' && <Loader />}
      {error && <Error errorMessage={error} />}

      <CharactersList characters={characters} />
    </>
  );
};
