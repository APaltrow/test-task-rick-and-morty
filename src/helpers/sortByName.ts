import { ICharacter } from '@types';

export const sortByName = (characters: ICharacter[]) => {
  return characters.sort((prev, next) => prev.name.localeCompare(next.name));
};
