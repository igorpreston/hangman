import React from 'react';
import PropTypes from 'prop-types';
import './styles';

const NewWordButton = ({ onClick }) => (
  <button 
    className="game__game-over-screen__new-word" 
    onClick={onClick}
  >
    New Word
  </button>
);

NewWordButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewWordButton;