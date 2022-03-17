import Axios from 'axios';
import { CharacterEntity } from './character.api-model';

const RMDetailUrl = 'http://localhost:3000/characters/';

export const getCharacter = async (
  characterId: string
): Promise<CharacterEntity> => {
  const { data } = await Axios.get(`${RMDetailUrl}/${characterId}`);
  return data;
};
