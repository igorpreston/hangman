import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles';

const LetterBar = ({ active, children }) => (
  <div
    className={classNames({
      'game__word-letter-list__letter-bar--active': active,
      'game__word-letter-list__letter-bar--inactive': !active,
      'animated': active,
      'bounceIn': active,
    })}
  >
    {children ?
      <span className="game__word-letter-list__letter-bar__typography animated bounceIn">
        {children}
      </span>
    : null}
  </div>
);

LetterBar.propTypes = {
  active: PropTypes.bool,
};

LetterBar.defaultProps = {
  active: false,
};

export default LetterBar;