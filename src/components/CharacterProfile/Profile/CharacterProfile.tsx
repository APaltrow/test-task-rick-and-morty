import { FC } from 'react';

import { InfoList, ProfilePhoto } from '@components';

import { ICharacter } from '@types';

import style from './CharacterProfile.module.scss';

interface ProfileProps {
  character: null | ICharacter;
}

export const CharacterProfile: FC<ProfileProps> = ({ character }) => {
  if (!character) return null;

  const { image, name, gender, status, species, origin, type } = character;

  return (
    <section className={style.container}>
      <ProfilePhoto
        imgUrl={image}
        name={name}
      />

      <h1 className={style.name}>{name}</h1>
      <p className={style.info}>Informations</p>

      <InfoList
        gender={gender}
        status={status}
        species={species}
        origin={origin.name}
        type={type}
      />
    </section>
  );
};
