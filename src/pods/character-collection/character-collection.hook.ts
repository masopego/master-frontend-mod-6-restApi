import * as React from 'react';
import { Character } from 'common/models';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    Character[]
  >([]);
  const [count, setCount] = React.useState<number>(1);
  const [page, setPage] = React.useState<number>(1);

  const handlePage = (newPage: number) => setPage(newPage);

  const loadCharacterCollection = async () => {
    const { info, results } = await getCharacterCollection(page);

    setCount(info.pages);
    setCharacterCollection(mapToCollection(results, mapFromApiToVm));
  };
  React.useEffect(() => {
    loadCharacterCollection();
  }, [page]);

  return { characterCollection, loadCharacterCollection, count, handlePage };
};
