import React from 'react';
import { Character } from 'common/models';
import * as classes from './character.styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ width: '400px', height: '400px', marginBottom: '10px' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Localización: {character.location.name} || Status:{' '}
            {character.status}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Episodios: {character.episode.length}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
