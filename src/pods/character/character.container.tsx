import React from 'react';
import { useCharacter } from './character.hooks';
import { useParams, useHistory } from 'react-router-dom';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const { characterId } = useParams();

  const { character } = useCharacter(characterId);

  if (!character) {
    return <div>Loading character</div>;
  }

  return <CharacterComponent character={character} />;
};
