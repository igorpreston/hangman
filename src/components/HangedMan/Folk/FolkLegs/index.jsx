import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkLegs = ({ children }) => (
  <div
    className={classNames.bind(styles)({
      legs: true,
    })}
  >
    {children}
  </div>
);

export default FolkLegs;