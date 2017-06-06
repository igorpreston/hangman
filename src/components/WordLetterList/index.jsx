import React from 'react';
import classNames from 'classnames/bind';
import LetterBar from './LetterBar';
import styles from './styles';

const WordLetterList = ({ guessedLetters }) => (
  <div
    className={classNames.bind(styles)({
      list: true,
    })}
  >
    {guessedLetters && guessedLetters.map((letter, i) =>
      <LetterBar
        key={i}
        active={letter.guessed || !letter.placeholder}
      >
        {letter.guessed ? letter.name : null}
      </LetterBar>
    )}
  </div>
);

export default WordLetterList;