import * as apiModel from './api/character-collection.api-model';
import * as viewModel from 'common/models';

export const mapFromApiToVm = (
  character: apiModel.CharacterData
): viewModel.Character => ({
  id: character.id,
  image: character.image,
  name: character.name,
  created: character.created,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  episode: character.episode,
  url: character.url,
});
