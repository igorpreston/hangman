import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import MissedLetterBar from '../MissedLetterBar';
import './styles';

const MissedLettersList = ({ missedLetters }) => (
  <div className="game__missed-letters__list">
    {missedLetters && missedLetters.map(letter => (
      <MissedLetterBar
        key={letter}
      >
        {letter}
      </MissedLetterBar>
    ))}
  </div>
);

MissedLettersList.propTypes = {
  missedLetters: ImmutablePropTypes.list.isRequired,
};

export default MissedLettersList;