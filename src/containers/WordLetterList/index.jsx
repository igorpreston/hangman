import React from 'react';
import { connect } from 'react-redux';
import { getGuessedLettersWithPlaceholders } from '../../reducers/game';
import WordLetterList from '../../components/WordLetterList';

const mapStateToProps = state => ({
  guessedLetters: getGuessedLettersWithPlaceholders(state),
});

const WordLetterListContainer = connect(
  mapStateToProps,
)(WordLetterList);

WordLetterListContainer.displayName = 'WordLetterListContainer';

export default WordLetterListContainer;