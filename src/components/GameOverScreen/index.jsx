import React from 'react';
import PropTypes from 'prop-types';
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

GameOverScreen.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

export default GameOverScreen;