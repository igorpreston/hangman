import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkArm = ({ side }) => (
  <div
    className={classNames.bind(styles)({
      leftArm: side === 'left',
      rightArm: side === 'right',
    })}
  >
    <div 
      className={classNames.bind(styles)({
        leftArmShape: side === 'left',
        rightArmShape: side === 'right',
      })}
    />
  </div>
);

FolkArm.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default FolkArm;