import { createSlice } from '@reduxjs/toolkit';

import { StatusList } from '@types';
import { sortByName } from '@helpers';

import { fetchCharactersThunk, fetchSearchThunk } from './characters.actions';
import { ICharactersState } from './characters.types';

const initialState: ICharactersState = {
  characters: [],

  status: StatusList.IDLE,
  error: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersThunk.pending, (state) => {
        state.status = StatusList.PENDING;
        state.error = '';

        state.characters = [];
      })
      .addCase(fetchCharactersThunk.fulfilled, (state, action) => {
        state.characters = sortByName(action.payload);

        state.status = StatusList.SUCCESS;
        state.error = '';
      })
      .addCase(fetchCharactersThunk.rejected, (state, action) => {
        state.characters = [];

        state.status = StatusList.ERROR;
        state.error = action.error.message || 'error';
      })
      .addCase(fetchSearchThunk.pending, (state) => {
        state.status = StatusList.PENDING;
        state.error = '';

        state.characters = [];
      })
      .addCase(fetchSearchThunk.fulfilled, (state, action) => {
        state.characters = sortByName(action.payload);

        state.status = StatusList.SUCCESS;
        state.error = '';
      })
      .addCase(fetchSearchThunk.rejected, (state, action) => {
        state.characters = [];

        state.status = StatusList.ERROR;
        state.error = action.error.message || 'error';
      });
  },
});
