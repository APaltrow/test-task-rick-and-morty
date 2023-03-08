import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICharacter } from '@/types/characterTypes';
import { fetchSingleCharacter } from '@api/charactersApi';

export const fetchSingleCharacterThunk = createAsyncThunk<ICharacter, string>(
  'singleCharacter/fetchSingleCharacterThunk',
  fetchSingleCharacter,
);
