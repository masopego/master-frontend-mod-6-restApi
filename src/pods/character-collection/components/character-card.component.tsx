import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { Character } from 'common/models';
import DetailsIcon from '@material-ui/icons/Details';
import * as classes from './character-card.styles';

interface Props {
  character: Character;
  onCharacterDetail: (characterId: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onCharacterDetail } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Status: {character.status}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Episodios: {character.episode.length}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onCharacterDetail(character.id.toString())}>
          <DetailsIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
