import { useState, FC } from 'react';
import { Link } from 'react-router-dom';

import { SearchBar, Logo, CharacterCard } from '@components';

import style from './Home.module.scss';

export const HomePage: FC = () => {
  const [cards] = useState([1, 2, 3, 4, 1, 2, 3, 4]);

  return (
    <>
      <Logo />

      <SearchBar />

      <div className={style.characters_catalog}>
        {cards.map((card) => (
          <Link
            to={`/character/${card}`}
            key={card}
          >
            <CharacterCard key={card} />
          </Link>
        ))}
      </div>
    </>
  );
};
