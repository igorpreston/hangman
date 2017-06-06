import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const Gallow = () => (
  <div 
    className={classNames.bind(styles)({
      gallow: true,
    })}
  >
    <div
      className={classNames.bind(styles)({
        horBar: true,
      })}
    />
    <div
      className={classNames.bind(styles)({
        vertBar: true,
      })}
    />
  </div>
);

export default Gallow;