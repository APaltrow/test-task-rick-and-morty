import { RootState } from '@redux';

export const getAuthState = (state: RootState) => state.auth;
