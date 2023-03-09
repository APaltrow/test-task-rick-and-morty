import { IState, ICharacter } from '@types';

export interface ICharactersState extends IState {
  characters: ICharacter[];
}
