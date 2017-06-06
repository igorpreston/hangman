import { List } from 'immutable';
import { createSelector } from 'reselect';
import { Word } from '../records/word';
import * as types from '../actionTypes/word';
import { GAME_RESTART } from '../actionTypes/game';

function parseTheWord (state, word) {
  return state.set(
    'letters',
    List.of(...extractLettersFromWord(word)),
  );
};

function extractLettersFromWord (word) {
  return word.split('');
};

export const initialState = new Word({
  letters: List(),
});

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_WORD_SUCCESS:
      return parseTheWord(state, payload.word);
    case types.FETCH_WORD_FAILURE:
      return parseTheWord(state, payload.word);
    case GAME_RESTART:
      return initialState;
    default:
      return state;
  };
};

export const getWordLetters = state => state.getIn(['word', 'letters']);

export const getWordLength = createSelector(
  getWordLetters,
  word => word.size,
);

export const getGuessingLetter = (state, letter) => letter;

export const getDoesTheWordHaveLetter = createSelector(
  getWordLetters,
  getGuessingLetter,
  (word, letter) => word.includes(letter),
);