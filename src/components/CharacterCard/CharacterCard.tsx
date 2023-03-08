import { FC } from 'react';

import logoIcon from '@assets/images/logo.png';

import style from './CharacterCard.module.scss';

export const CharacterCard: FC = () => {
  return (
    <section className={style.character_card}>
      <img
        src={logoIcon}
        alt="character"
        className={style.character_img}
      />
      <h2 className={style.character_name}>name</h2>
      <p className={style.character_title}>human</p>
    </section>
  );
};
