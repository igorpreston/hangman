import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './styles';

const FolkHand = ({ side }) => (
  <div
    className={classNames.bind(styles)({
      leftHand: side === 'left',
      rightHand: side === 'right',
      animated: true,
      bounceIn: true,
    })}
  />
);

FolkHand.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default FolkHand;

