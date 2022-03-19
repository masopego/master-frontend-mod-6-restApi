import React from 'react';
import { Character } from 'common/models';
import * as classes from './character.styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
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

  const handleEditCharacter = (sentenceIndex: number) => {
    // const newBestSentence = bestSentences[sentenceIndex] = bestSentences;
    // setBestSentences(newBestSentences);
  };

  const handleAddNewSentences = () => {
    if (sentence) {
      console.log('entro por el añadir nueva frase', sentence);
      const newBestSentences = [...bestSentences, sentence];
      console.log({ newBestSentences });
      setBestSentences(newBestSentences);

      onSaveBestSentences(bestSentences);
    }
  };

  React.useEffect(() => {
    if (sentence) {
      onSaveBestSentences(bestSentences);
      setSentence('');
    }
  }, [bestSentences]);

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
            <Typography variant="subtitle1">Mejores Frases:</Typography>
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
                      <EditIcon />
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
