import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkFoot = ({ side }) => (
  <div
    className={classNames.bind(styles)({
      leftFoot: side === 'left',
      rightFoot: side === 'right',
      animated: true,
      bounceIn: true,
    })}
  >
    <div
      className={classNames.bind(styles)({
        leftFootShape: side === 'left',
        rightFootShape: side === 'right',
      })}
    />
  </div>
);

FolkFoot.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default FolkFoot;