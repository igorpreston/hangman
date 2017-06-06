import React from 'react';
import classNames from 'classnames/bind';
import GameOverScreenTitle from './GameOverScreenTitle';
import NewWordButton from '../../containers/NewWordButton';
import styles from './styles';

const GameOverScreen = ({ isPlaying }) => !isPlaying ? (
  <div
    className={classNames.bind(styles)({
      gameOver: true,
    })}
  >
    <GameOverScreenTitle />
    <NewWordButton />
  </div>
) : null;

export default GameOverScreen;