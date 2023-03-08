import { FC } from 'react';

import { GoBackButton, InfoList, ProfilePhoto } from '@components';

import style from './SingleCharacter.module.scss';

export const SingleCharacterPage: FC = () => {
  return (
    <>
      <section className={style.character_container}>
        <ProfilePhoto />

        <h1 className={style.name}>Rick Sanchez</h1>
        <p className={style.info}>Informations</p>

        <InfoList />
      </section>

      <GoBackButton />
    </>
  );
};
