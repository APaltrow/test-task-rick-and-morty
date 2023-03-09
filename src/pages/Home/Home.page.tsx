import { useState, FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SearchBar, Logo, CharacterCard } from '@components';
import { useDebounce } from '@hooks/useDebounce';
import {
  useAppSelector,
  useAppDispatch,
  getCharactersState,
  fetchCharactersThunk,
  fetchSearchThunk,
} from '@redux';

import style from './Home.module.scss';

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { characters, status, error } = useAppSelector(getCharactersState);

  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('search') || '',
  );

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

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchSearchThunk(searchValue));

      return;
    }

    dispatch(fetchCharactersThunk());
  }, []);

  if (error) {
    localStorage.setItem('search', '');
  }

  return (
    <>
      <Logo />

      <SearchBar
        value={searchValue}
        onSearch={onSearch}
      />

      <div className={style.characters_catalog}>
        {characters.length ? (
          characters.map(({ id, name, species, image }) => (
            <Link
              to={`/character/${id}`}
              key={id}
            >
              <CharacterCard
                name={name}
                species={species}
                imgUrl={image}
              />
            </Link>
          ))
        ) : (
          <div>Error: Nothing is found !</div>
        )}
      </div>
    </>
  );
};
