import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkLeg = ({ side }) => (
  <div
    className={classNames.bind(styles)({
      leftLeg: side === 'left',
      rightLeg: side === 'right',
    })}
  >
    <div
      className={classNames.bind(styles)({
        leftLegShape: side === 'left',
        rightLegShape: side === 'right',
      })}
    />
  </div>
);

FolkLeg.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default FolkLeg;