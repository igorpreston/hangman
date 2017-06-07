import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkFeet = ({ children }) => (
  <div
    className={classNames.bind(styles)({
      feet: true,
    })}
  >
    {children}
  </div>
);

FolkFeet.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FolkFeet;