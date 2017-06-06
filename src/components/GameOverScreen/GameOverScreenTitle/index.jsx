import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const GameOverScreenTitle = () => (
  <h1
    className={classNames.bind(styles)({
      title: true,
    })}
  >
    Game Over
  </h1>
);

export default GameOverScreenTitle;