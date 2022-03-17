import Axios from 'axios';
import { CharacterEntity } from './character.api-model';

const RMDetailUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (
  characterId: string
): Promise<CharacterEntity> => {
  const { data } = await Axios.get(`${RMDetailUrl}/${characterId}`);
  return data;
};
