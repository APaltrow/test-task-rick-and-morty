import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GoBackButton, Error, Loader, CharacterProfile } from '@components';
import { useScrollTop } from '@hooks/useScrollTop';
import {
  fetchSingleCharacterThunk,
  getSingleCharacterState,
  useAppDispatch,
  useAppSelector,
} from '@redux';

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

      <CharacterProfile character={character} />

      <GoBackButton />
    </>
  );
};
