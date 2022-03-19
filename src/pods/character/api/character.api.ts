import Axios from 'axios';
import { CharacterEntity } from './character.api-model';

const RMDetailUrl = 'api/characters';

export const getCharacter = async (
  characterId: string
): Promise<CharacterEntity> => {
  const { data } = await Axios.get(`${RMDetailUrl}/${characterId}`);
  return data;
};

export const saveCharacterBestSentences = async (
  characterId: string,
  bestSentences: string[]
): Promise<boolean> => {
  try {
    return Axios.patch(`${RMDetailUrl}/${characterId}`, { bestSentences });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
