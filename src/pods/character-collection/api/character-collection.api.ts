import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const RMUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi> => {
  const { data } = await Axios.get(RMUrl);
  return data;
};
