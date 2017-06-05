import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import * as types from '../actionTypes/game';
import { Letter } from '../records/letter';
import { getWordLetters, getWordLength, getGuessingLetter } from './word';

export const initialState = fromJS({
  isPlaying: true,
  guessed: [],
  missed: [],
});

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.LETTER_GUESSED:
      return guessOrMissLetter(state, 'guessed', payload.letter);
    case types.LETTER_MISSED:
      return guessOrMissLetter(state, 'missed', payload.letter);
    case types.GAME_OVER:
      return state.set('isPlaying', false);
    case types.GAME_RESTART:
      return initialState;
    default:
      return state;
  };
};

function guessOrMissLetter (state, path, letter) {
  if (state.get(path).includes(letter)) return state;

  return state.set(
    path,
    state.get(path).push(letter),
  );
};

export const getIsPlaying = state => state.getIn(['game', 'isPlaying']);

export const getGuessedLetters = state => state.getIn(['game', 'guessed']);

export const getMissedLetters = state => state.getIn(['game', 'missed']);

export const getAreAllLettersGuessed = createSelector(
  getWordLetters,
  getGuessedLetters,
  (word, guessed) => word.every(letter => guessed.includes(letter)),
);

export const getIsTheMissingLetterDuplicated = createSelector(
  getGuessingLetter,
  getMissedLetters,
  (letter, missed) => missed.includes(letter),
);

export const getLetterPlaceholders = createSelector(
  getWordLength,
  length => length < 11 ? Array.apply(null, Array(11 - length)).map(placeholder =>
    new Letter({
      name: '',
      placeholder: true,
    }),
  ) : [],
);

export const getPositionedGuessedLetters = createSelector(
  getWordLetters,
  getGuessedLetters,
  (word, guessed) => word.map(letter => new Letter({
    name: letter,
    guessed: guessed.includes(letter),
  })),
);

export const getGuessedLettersWithPlaceholders = createSelector(
  getLetterPlaceholders,
  getPositionedGuessedLetters,
  (placeholders, guessed) => fromJS(placeholders).concat(guessed),
);