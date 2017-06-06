import * as types from '../actionTypes/game';
import { getDoesTheWordHaveLetter, getWordLength } from '../reducers/word';
import { getIsTheMissingLetterDuplicated, getAreAllLettersGuessed } from '../reducers/game';
import { fetchWord } from './word';
import { hangTheFolk } from './folk';

export const guessLetter = letter => (dispatch, getState) => {
  const wordLength = getWordLength(getState());
  if (wordLength <= 0) return;
  const parsedLetter = letter.toLowerCase();
  const wordHasLetter = getDoesTheWordHaveLetter(getState(), parsedLetter);

  if (wordHasLetter) {
    dispatch(letterGuessed(parsedLetter));

    const allGuessed = getAreAllLettersGuessed(getState());

    if (allGuessed) {
      dispatch(gameOver());
    }
  } else {
    const duplicatedLetter = getIsTheMissingLetterDuplicated(getState(), parsedLetter);
    if (!duplicatedLetter) {
      dispatch(letterMissed(parsedLetter));
      dispatch(hangTheFolk());
    }
  }
};

export const letterGuessed = letter => ({
  type: types.LETTER_GUESSED,
  payload: { letter },
});

export const letterMissed = letter => ({
  type: types.LETTER_MISSED,
  payload: { letter },
});

export const gameOver = () => ({
  type: types.GAME_OVER,
});

export const restartGame = () => dispatch => {
  dispatch(gameRestart());
  dispatch(fetchWord());
};

export const gameRestart = () => ({
  type: types.GAME_RESTART,
});