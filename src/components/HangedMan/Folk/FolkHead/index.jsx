import React from 'react';
import classNames from 'classnames';
import head from './head.png';
import './styles';

const FolkHead = () => (
  <img 
    src={head}
    className={classNames({
      'game__hanged-man__folk__head': true,
      'animated': true,
      'bounceIn': true,
    })}
    role="presentation"
  />
);

export default FolkHead;