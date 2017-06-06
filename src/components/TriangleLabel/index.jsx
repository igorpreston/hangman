import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const TriangleLabel = () => (
  <div
    className={classNames.bind(styles)({
      triangle: true,
    })}
  >
    <div
      className={classNames.bind(styles)({
        shape: true,
      })}
    />
  </div>
);

export default TriangleLabel;