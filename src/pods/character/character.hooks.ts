import * as React from 'react';
import * as api from './api';
import { Character } from 'common/models';
import { mapCharacterFromApiToVm } from './character.mappers';

export const useCharacter = (characterId: string) => {
  const [character, setCharacter] = React.useState<Character>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(characterId);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    handleLoadCharacter();
  }, []);

  return { character, setCharacter };
};
