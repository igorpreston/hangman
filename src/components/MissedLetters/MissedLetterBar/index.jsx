import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const MissedLetterBar = ({ children }) => (
  <div
    className={classNames.bind(styles)({
      bar: true,
    })}
  >
    <span
      className={classNames.bind(styles)({
        text: true,
      })}
    >
      {children}
    </span>
  </div>
);

MissedLetterBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MissedLetterBar;