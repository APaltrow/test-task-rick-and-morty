export interface ILocation {
  name: string;
  url: string;
}

export interface IOrigin {
  name: string;
  url: string;
}

export type IEpisode = string[];

export interface ICharacter {
  created: string;
  gender: string;
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
  url: string;

  episode: IEpisode;
  location: ILocation;
  origin: IOrigin;
}
