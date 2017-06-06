import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const MissedLettersTitle = () => (
  <h1
    className={classNames.bind(styles)({
      title: true,
    })}
  >
    You missed:
  </h1>
);

export default MissedLettersTitle;