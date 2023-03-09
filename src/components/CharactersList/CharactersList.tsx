import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICharacter } from '@types';

import { CharacterCard } from './CharacterCard/CharacterCard';

import style from './CharactersList.module.scss';

interface CharactersListProps {
  characters: ICharacter[];
}

export const CharactersList: FC<CharactersListProps> = ({ characters }) => {
  if (!characters.length) return null;

  return (
    <div className={style.characters_list}>
      {characters.map(({ id, name, species, image }) => (
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
      ))}
    </div>
  );
};
