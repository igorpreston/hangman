import React from 'react';
import LetterBar from '../LetterBar';
import './styles';

const WordLetterList = ({ guessedLetters }) => (
  <div className="game__word-letter-list">
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