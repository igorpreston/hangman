import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles';

const FolkLeg = ({ side }) => (
  <div
    className={classNames({
      'game__hanged-man__folk__legs__leg': true,
      'game__hanged-man__folk__legs__leg--left': side === 'left',
      'game__hanged-man__folk__legs__leg--right': side === 'right',
      'animated': true,
      'bounceIn': true,
    })}
  >
    <div
      className={classNames({
        'game__hanged-man__folk__legs__leg--left__bg': side === 'left',
        'game__hanged-man__folk__legs__leg--right__bg': side === 'right',
      })}
    />
  </div>
);

FolkLeg.propTypes = {
  side: PropTypes.oneOf(['left', 'right']),
};

export default FolkLeg;