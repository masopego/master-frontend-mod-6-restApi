import React from 'react';
import { useCharacter } from './character.hooks';
import { useParams, useHistory } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { saveCharacterBestSentences } from './api/character.api';

export const CharacterContainer: React.FunctionComponent = () => {
  const { characterId } = useParams();
  const history = useHistory();

  const { character } = useCharacter(characterId);

  const onSaveBestSentences = async (bestSentences: string[]) => {
    const success = await saveCharacterBestSentences(
      characterId,
      bestSentences
    );
    if (success) {
      history.goBack();
    } else {
      alert('Error on save best sentences');
    }
  };

  if (!character) {
    return <div>Loading character</div>;
  }

  return (
    <CharacterComponent
      character={character}
      onSaveBestSentences={onSaveBestSentences}
    />
  );
};
