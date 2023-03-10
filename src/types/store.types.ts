export enum StatusList {
  IDLE = 'IDLE',
  SUCCESS = 'success',
  ERROR = 'error',
  PENDING = 'pending',
}

export interface IState {
  status: StatusList;
  error: string;
}
