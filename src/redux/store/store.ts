import { configureStore } from '@reduxjs/toolkit';

import { charactersSlice, singleCharacterSlice, authSlice } from '../slices';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    characters: charactersSlice.reducer,
    singleCharacter: singleCharacterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
