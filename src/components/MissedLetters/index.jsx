import React from 'react';
import MissedLettersTitle from '../MissedLettersTitle';
import MissedLettersList from '../../containers/MissedLettersList';
import './styles';

const MissedLetters = () => (
  <div className="game__missed-letters">
    <MissedLettersTitle />
    <MissedLettersList />
  </div>
);

export default MissedLetters;