import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCharacters, fetchSearchedCharacters } from '@/api/charactersApi';
import { ICharacter } from '@/types/characterTypes';

export const fetchCharactersThunk = createAsyncThunk<ICharacter[]>(
  'characters/fetchCharactersThunk',
  fetchCharacters,
);

export const fetchSearchThunk = createAsyncThunk<ICharacter[], string>(
  'characters/fetchSearchThunk',
  fetchSearchedCharacters,
);
