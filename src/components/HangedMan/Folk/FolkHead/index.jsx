import React from 'react';
import classNames from 'classnames/bind';
import head from './head/head.png';
import head2x from './head/head@2x.png';
import head3x from './head/head@3x.png';
import styles from './styles';

const FolkHead = () => (
  <img 
    src={head}
    srcSet={`${head} 1x, ${head2x} 2x, ${head3x} 3x`}
    className={classNames.bind(styles)({
      head: true,
    })}
    role="presentation"
  />
);

export default FolkHead;