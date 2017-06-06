import React from 'react';
import classNames from 'classnames';
import './styles';

const FolkNeck = () => (
  <div 
    className={classNames({
      'game__hanged-man__folk__neck': true,
      'animated': true,
      'bounceIn': true,
    })}
  />
);

export default FolkNeck;