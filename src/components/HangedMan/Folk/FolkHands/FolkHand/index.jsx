import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import './styles';

const FolkHand = ({ side }) => (
  <div
    className={classNames({
      'game__hanged-man__folk__hands__hand--left': side === 'left',
      'game__hanged-man__folk__hands__hand--right': side === 'right',
      'animated': true,
      'bounceIn': true,
    })}
  />
);

FolkHand.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default FolkHand;

