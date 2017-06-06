import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const LetterBar = ({ active, children }) => (
  <div
    className={classNames.bind(styles)({
      activeBar: active,
      inactiveBar: !active,
    })}
  >
    {children ?
      <span
        className={classNames.bind(styles)({
          text: true,
          animated: true,
          bounceIn: true,
        })}
      >
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