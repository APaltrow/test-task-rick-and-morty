import { ICharacter } from '@/types/characterTypes';
import { IState } from '@/types/storeTypes';

export interface ICharactersState extends IState {
  characters: ICharacter[];
}
