import { CharacterLocation, CharacterOrigin } from './api';

export interface CharacterEntityVm {
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
