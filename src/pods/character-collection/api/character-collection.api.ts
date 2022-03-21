import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { CharacterEntityApi } from './character-collection.api-model';

interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi;
}

export const getCharacterCollection = async (
  page: number
): Promise<CharacterEntityApi> => {
  const CharacterCollectionQuery = gql`
    query ($page: Int) {
      characters(page: $page) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          created
          name
          status
          species
          type
          gender
          image
        }
      }
    }
  `;

  const { characters } =
    await graphQLClient.request<GetCharacterCollectionResponse>(
      CharacterCollectionQuery,
      { page }
    );

  return characters;
};
