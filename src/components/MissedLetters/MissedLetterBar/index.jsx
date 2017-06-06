import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const MissedLetterBar = ({ children }) => (
  <div
    className={classNames.bind(styles)({
      bar: true,
    })}
  >
    <span
      className={classNames.bind(styles)({
        text: true,
      })}
    >
      {children}
    </span>
  </div>
);

export default MissedLetterBar;