import * as React from 'react';
import { Character } from 'common/models';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Pagination } from '@material-ui/lab';

interface Props {
  characterCollection: Character[];
  onCharacterDetail: (characterId: string) => void;
  handlePage: (newPage: number) => void;
  count: number;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCharacterDetail, handlePage, count } = props;

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
      <Pagination
        count={count}
        onChange={(ev, newPage) => handlePage(newPage)}
      />
    </div>
  );
};
