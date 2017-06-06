import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkFeet = ({ children }) => (
  <div
    className={classNames.bind(styles)({
      feet: true,
    })}
  >
    {children}
  </div>
);

export default FolkFeet;