import React from 'react';
import GameOverScreenTitle from './GameOverScreenTitle';
import NewWordButton from '../../containers/NewWordButton';
import './styles';

const GameOverScreen = ({ isPlaying }) => !isPlaying ? (
  <div className="game__game-over-screen animated bounceIn">
    <GameOverScreenTitle />
    <NewWordButton />
  </div>
) : null;

export default GameOverScreen;