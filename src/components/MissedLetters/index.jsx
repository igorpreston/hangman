import React from 'react';
import classNames from 'classnames/bind';
import MissedLettersTitle from './MissedLettersTitle';
import MissedLettersList from '../../containers/MissedLettersList';
import styles from './styles';

const MissedLetters = () => (
  <div
    className={classNames.bind(styles)({
      missedLetters: true,
    })}
  >
    <MissedLettersTitle />
    <MissedLettersList />
  </div>
);

export default MissedLetters;