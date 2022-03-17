import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Character } from 'common/models';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: Character[];
  onCharacterDetail: (characterId: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCharacterDetail } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onCharacterDetail={onCharacterDetail}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
