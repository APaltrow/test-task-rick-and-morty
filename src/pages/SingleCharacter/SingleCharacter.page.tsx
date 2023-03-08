import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GoBackButton, InfoList, ProfilePhoto } from '@components';

import {
  fetchSingleCharacterThunk,
  getSingleCharacterState,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import { useScrollTop } from '@hooks/useScrollTop';

import style from './SingleCharacter.module.scss';

export const SingleCharacterPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { character, status, error } = useAppSelector(getSingleCharacterState);

  if (!id) return null;

  useEffect(() => {
    dispatch(fetchSingleCharacterThunk(id));
  }, []);

  useScrollTop();

  return character ? (
    <>
      <section className={style.character_container}>
        <ProfilePhoto
          imgUrl={character.image}
          name={character.name}
        />

        <h1 className={style.name}>{character.name}</h1>
        <p className={style.info}>Informations</p>

        <InfoList
          gender={character.gender}
          status={character.status}
          species={character.species}
          origin={character.origin.name}
          type={character.type}
        />
      </section>

      <GoBackButton />
    </>
  ) : null;
};
