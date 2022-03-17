import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const RMUrl = 'http://localhost:3000/characters/';

export const getCharacterCollection = async (): Promise<CharacterEntityApi> => {
  const { data } = await Axios.get(RMUrl);
  return data;
};
