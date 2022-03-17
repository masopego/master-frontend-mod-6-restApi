import * as React from 'react';
import { Character } from 'common/models';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    Character[]
  >([]);

  const loadCharacterCollection = async () => {
    const data = await getCharacterCollection();
    setCharacterCollection(mapToCollection(data, mapFromApiToVm));
  };

  return { characterCollection, loadCharacterCollection };
};
