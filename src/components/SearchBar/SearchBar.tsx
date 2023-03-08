import { ChangeEvent, FC } from 'react';

import searchIcon from '@assets/images/search.svg';

import style from './SearchBar.module.scss';

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ value, onSearch }) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={style.search_container}>
      <label
        htmlFor="search"
        className={style.search_label}
      >
        <img
          className={style.search_icon}
          src={searchIcon}
          alt="search"
        />
        <input
          className={style.search_input}
          type="search"
          value={value}
          onChange={onInputChange}
          placeholder="Filter by name..."
        />
      </label>
    </div>
  );
};
