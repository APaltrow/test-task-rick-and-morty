import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICharacter } from '@types';

import { fetchCharacters, fetchSearchedCharacters } from '@api/charactersApi';

export const fetchCharactersThunk = createAsyncThunk<ICharacter[]>(
  'characters/fetchCharactersThunk',
  fetchCharacters,
);

export const fetchSearchThunk = createAsyncThunk<ICharacter[], string>(
  'characters/fetchSearchThunk',
  fetchSearchedCharacters,
);
