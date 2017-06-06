import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles';

const FolkArm = ({ side }) => (
  <div
    className={classNames({
      'game__hanged-man__folk__arms__arm--left': side === 'left',
      'game__hanged-man__folk__arms__arm--right': side === 'right',
      'animated': true,
      'bounceIn': true,
    })}
  >
    <div 
      className={classNames({
        'game__hanged-man__folk__arms__arm--left__bg': side === 'left',
        'game__hanged-man__folk__arms__arm--right__bg': side === 'right',
      })}
    />
  </div>
);

FolkArm.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default FolkArm;