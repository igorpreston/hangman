import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkHands = ({ children }) => (
  <div 
    className={classNames.bind(styles)({
      hands: true,
    })}
  >
    {children}
  </div>
);

FolkHands.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FolkHands;