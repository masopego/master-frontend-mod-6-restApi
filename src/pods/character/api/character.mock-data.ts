import { Character } from 'common/models';

export const mockCharacter: Character = {
  id: 15,
  name: 'Alien Rick',
  status: 'unknown',
  species: 'Alien',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/10'],
  url: 'https://rickandmortyapi.com/api/character/15',
  created: '2017-11-04T20:56:13.215Z',
};
