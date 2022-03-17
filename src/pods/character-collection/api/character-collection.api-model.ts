import { CharacterLocation, CharacterOrigin } from 'common/models';

export interface CharacterInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface CharacterData {
  id: number;
  created: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
}

export interface CharacterEntityApi {
  info: CharacterInfo;
  results: CharacterData[];
}
