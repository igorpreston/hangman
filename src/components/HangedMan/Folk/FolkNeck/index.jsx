import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkNeck = () => (
  <div 
    className={classNames.bind(styles)({
      neck: true,
    })}
  />
);

export default FolkNeck;