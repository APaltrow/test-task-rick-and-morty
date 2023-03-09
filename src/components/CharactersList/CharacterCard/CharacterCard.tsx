import { FC } from 'react';

import style from './CharacterCard.module.scss';

interface CardProps {
  name: string;
  species: string;
  imgUrl: string;
}

export const CharacterCard: FC<CardProps> = ({ name, species, imgUrl }) => (
  <section className={style.character_card}>
    <img
      src={imgUrl}
      alt={name}
      className={style.character_img}
    />
    <h2 className={style.character_name}>{name}</h2>
    <p className={style.character_title}>{species}</p>
  </section>
);
