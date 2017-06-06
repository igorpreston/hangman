import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkHands = ({ children }) => (
  <div 
    className={classNames.bind(styles)({
      hands: true,
    })}
  >
    {children}
  </div>
);

export default FolkHands;