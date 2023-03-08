import { FC } from 'react';

import searchIcon from '@assets/images/search.svg';

import style from './SearchBar.module.scss';

export const SearchBar: FC = () => {
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
          placeholder="Filter by name..."
        />
      </label>
    </div>
  );
};
