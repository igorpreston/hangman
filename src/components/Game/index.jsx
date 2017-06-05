import React from 'react';
import HangedMan from '../HangedMan';
import MissedLetters from '../MissedLetters';
import TriangleLabel from '../TriangleLabel';
import WordLetterList from '../../containers/WordLetterList';
import LetterKeyListener from '../../containers/LetterKeyListener';
import GameOverScreen from '../../containers/GameOverScreen';
import './styles';

const Game = () => (
  <div className="game">
    <HangedMan />
    <MissedLetters />
    <TriangleLabel />
    <WordLetterList />
    <LetterKeyListener />
    <GameOverScreen />
  </div>
);

export default Game;