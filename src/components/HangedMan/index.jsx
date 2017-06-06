import React from 'react';
import classNames from 'classnames/bind';
import Gallow from './Gallow';
import Folk from '../../containers/Folk';
import styles from './styles';

const HangedMan = () => (
  <div
    className={classNames.bind(styles)({
      hangedMan: true,
    })}
  >
    <Gallow />
    <Folk />
  </div>
);

export default HangedMan;