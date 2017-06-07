import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkArms = ({ children }) => (
  <div
    className={classNames.bind(styles)({
      arms: true,
    })}
  >
    {children}
  </div>
);

FolkArms.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FolkArms;