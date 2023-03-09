import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  GoBackButton,
  InfoList,
  ProfilePhoto,
  Error,
  Loader,
} from '@components';
import { useScrollTop } from '@hooks/useScrollTop';
import {
  fetchSingleCharacterThunk,
  getSingleCharacterState,
  useAppDispatch,
  useAppSelector,
} from '@redux';

import style from './SingleCharacter.module.scss';

export const SingleCharacterPage: FC = () => {
  const { character, status, error } = useAppSelector(getSingleCharacterState);

  const dispatch = useAppDispatch();
  const { id } = useParams();
  useScrollTop();

  if (!id) return null;

  useEffect(() => {
    dispatch(fetchSingleCharacterThunk(id));
  }, []);

  return (
    <>
      {status === 'pending' && <Loader />}
      {error && <Error errorMessage={error} />}

      {character ? (
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
      ) : null}

      <GoBackButton />
    </>
  );
};
