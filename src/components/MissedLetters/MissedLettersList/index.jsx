import React from 'react';
import classNames from 'classnames/bind';
import ImmutablePropTypes from 'react-immutable-proptypes';
import MissedLetterBar from '../MissedLetterBar';
import styles from './styles';

const MissedLettersList = ({ missedLetters }) => (
  <div
    className={classNames.bind(styles)({
      list: true,
    })}
  >
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