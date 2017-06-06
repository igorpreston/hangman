import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkArms = ({ children }) => (
  <div
    className={classNames.bind(styles)({
      arms: true,
    })}
  >
    {children}
  </div>
);

export default FolkArms;