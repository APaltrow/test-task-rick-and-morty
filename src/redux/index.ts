export * from './store/store';
export { useAppDispatch, useAppSelector } from './store/storeHooks';

/* Slices */

export { getCharactersState } from './slices/characters/characters.selectors';
export {
  fetchCharactersThunk,
  fetchSearchThunk,
} from './slices/characters/characters.actions';

export { getSingleCharacterState } from './slices/singleCharacter/singleCharacter.selectors';
export { fetchSingleCharacterThunk } from './slices/singleCharacter/singleCharacter.actions';
