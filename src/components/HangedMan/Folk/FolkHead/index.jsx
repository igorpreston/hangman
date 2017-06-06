import React from 'react';
import classNames from 'classnames/bind';
import head from './head.png';
import styles from './styles';

const FolkHead = () => (
  <img 
    src={head}
    className={classNames.bind(styles)({
      head: true,
    })}
    role="presentation"
  />
);

export default FolkHead;