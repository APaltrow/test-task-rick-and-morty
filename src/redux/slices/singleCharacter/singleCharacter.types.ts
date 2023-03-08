import { ICharacter } from '@/types/characterTypes';
import { IState } from '@/types/storeTypes';

export interface ISingleCharacterState extends IState {
  character: ICharacter | null;
}
