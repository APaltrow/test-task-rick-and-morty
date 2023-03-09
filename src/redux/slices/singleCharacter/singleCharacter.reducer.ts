import { createSlice } from '@reduxjs/toolkit';

import { StatusList } from '@types';

import { ISingleCharacterState } from './singleCharacter.types';
import { fetchSingleCharacterThunk } from './singleCharacter.actions';

const initialState: ISingleCharacterState = {
  character: null,

  status: StatusList.IDLE,
  error: '',
};

export const singleCharacterSlice = createSlice({
  name: 'singleCharacter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCharacterThunk.pending, (state) => {
        state.status = StatusList.PENDING;
        state.error = '';

        state.character = null;
      })
      .addCase(fetchSingleCharacterThunk.fulfilled, (state, action) => {
        state.character = action.payload;

        state.status = StatusList.SUCCESS;
        state.error = '';
      })
      .addCase(fetchSingleCharacterThunk.rejected, (state, action) => {
        state.character = null;

        state.status = StatusList.ERROR;
        state.error = action.error.message || 'error';
      });
  },
});
