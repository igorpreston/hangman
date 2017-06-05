import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles';

const FolkFoot = ({ side }) => (
  <div
    className={classNames({
      'game__hanged-man__folk__feet__foot': true,
      'game__hanged-man__folk__feet__foot--left': side === 'left',
      'game__hanged-man__folk__feet__foot--right': side === 'right',
      'animated': true,
      'bounceIn': true,
    })}
  >
    <div
      className={classNames({
        'game__hanged-man__folk__feet__foot--left__bg': side === 'left',
        'game__hanged-man__folk__feet__foot--right__bg': side === 'right',
      })}
    />
  </div>
);

FolkFoot.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default FolkFoot;