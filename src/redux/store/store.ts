import { configureStore } from '@reduxjs/toolkit';

import { charactersSlice } from '../slices/characters/characters.reducer';
import { singleCharacterSlice } from '../slices/singleCharacter/singleCharacter.reducer';

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    singleCharacter: singleCharacterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
