import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles';

const NewWordButton = ({ onClick }) => (
  <button 
    className={classNames.bind(styles)({
      button: true,
    })} 
    onClick={onClick}
  >
    New Word
  </button>
);

NewWordButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewWordButton;