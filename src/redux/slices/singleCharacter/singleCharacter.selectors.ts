import { RootState } from '@redux';

export const getSingleCharacterState = (state: RootState) =>
  state.singleCharacter;
