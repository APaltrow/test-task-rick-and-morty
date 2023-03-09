import { IState, ICharacter } from '@types';

export interface ISingleCharacterState extends IState {
  character: ICharacter | null;
}
