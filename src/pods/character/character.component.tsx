import React from 'react';
import { Character } from 'common/models';
import * as classes from './character.styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

interface Props {
  character: Character;
  onSaveBestSentences: (bestSentences: string[]) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSaveBestSentences } = props;

  const [sentence, setSentence] = React.useState('');
  const [bestSentences, setBestSentences] = React.useState(
    character.bestSentences
  );

  const handleSaveBestSentences = (ev) => {
    ev.preventDefault();
    onSaveBestSentences(bestSentences);
  };

  const handleEditCharacter = (sentenceIndex: number) =>
    setBestSentences((previousState) => {
      previousState.splice(sentenceIndex, 1);
      return previousState;
    });

  const handleAddNewSentences = (ev) => {
    ev.preventDefault();
    if (sentence) {
      const newBestSentences = [...bestSentences, sentence];
      setBestSentences(newBestSentences);
    }
  };

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
          <div className={classes.info}>
            <Typography variant="subtitle1" gutterBottom>
              Localización: {character.location.name} || Status:{' '}
              {character.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Episodios: {character.episode.length}
            </Typography>
            <div className={classes.bestSentencesContainer}>
              <Typography variant="subtitle1">Mejores Frases:</Typography>
              <Button
                className={classes.button}
                type="submit"
                color="primary"
                onClick={handleSaveBestSentences}
              >
                Save changes
              </Button>
            </div>
            <ul className={classes.list}>
              {character.bestSentences.map((sentence, index) => (
                <li key={`${character.id} + ${index}`}>
                  <p>{sentence}</p>
                  <div>
                    <IconButton
                      onClick={() => handleEditCharacter(index)}
                      type="button"
                      color="primary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </li>
              ))}
            </ul>
            <form
              onSubmit={handleAddNewSentences}
              className={classes.formContainer}
            >
              <textarea
                id="newBestSentence"
                className={classes.textArea}
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
              ></textarea>
              <Button className={classes.button} type="submit" color="primary">
                Add new sentence
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
