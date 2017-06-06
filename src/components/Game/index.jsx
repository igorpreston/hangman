import React from 'react';
import classNames from 'classnames/bind';
import HangedMan from '../HangedMan';
import MissedLetters from '../MissedLetters';
import TriangleLabel from '../TriangleLabel';
import WordLetterList from '../../containers/WordLetterList';
import LetterKeyListener from '../../containers/LetterKeyListener';
import GameOverScreen from '../../containers/GameOverScreen';
import styles from './styles';

const Game = () => (
  <div
    className={classNames.bind(styles)({
      game: true,
    })}
  >
    <HangedMan />
    <MissedLetters />
    <TriangleLabel />
    <WordLetterList />
    <LetterKeyListener />
    <GameOverScreen />
  </div>
);

export default Game;