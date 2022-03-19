import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { CharacterEntity } from './character.api-model';

interface CharacterResponse {
  character: CharacterEntity;
}
export const getCharacter = async (
  characterId: string
): Promise<CharacterEntity> => {
  const characterQuery = gql`
    query ($characterId: ID!) {
      character(id: $characterId) {
        id
        created
        name
        status
        species
        type
        gender
        image
        location {
          name
        }
      }
    }
  `;
  const { character } = await graphQLClient.request<CharacterResponse>(
    characterQuery,
    { characterId }
  );
  return character;
};
