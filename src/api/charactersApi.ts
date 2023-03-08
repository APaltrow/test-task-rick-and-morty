import axios from 'axios';

import {
  BASE_URL,
  SEARCH_BY_NAME_URL,
  SINGLE_CHARACTER_URL,
} from '@constants/urls';

import { ICharacter } from '@/types/characterTypes';

export const fetchCharacters = async () => {
  const { data } = await axios.get(BASE_URL);

  return data.results as ICharacter[];
};

export const fetchSearchedCharacters = async (charName: string) => {
  const { data } = await axios.get(`${SEARCH_BY_NAME_URL}${charName}`);

  return data.results as ICharacter[];
};

export const fetchSingleCharacter = async (charId: string) => {
  const { data } = await axios.get(`${SINGLE_CHARACTER_URL}${charId}`);

  return data as ICharacter;
};
