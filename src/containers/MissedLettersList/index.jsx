import React from 'react';
import { connect } from 'react-redux';
import { getMissedLetters } from '../../reducers/game';
import MissedLettersList from '../../components/MissedLetters/MissedLettersList';

const mapStateToProps = state => ({
  missedLetters: getMissedLetters(state),
});

const MissedLettersListContainer = connect(
  mapStateToProps,
)(MissedLettersList);

MissedLettersListContainer.displayName = 'MissedLetterListContainer';

export default MissedLettersListContainer;