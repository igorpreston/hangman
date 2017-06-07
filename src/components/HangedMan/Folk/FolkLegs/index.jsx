import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkLegs = ({ children }) => (
  <div
    className={classNames.bind(styles)({
      legs: true,
    })}
  >
    {children}
  </div>
);

FolkLegs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FolkLegs;