import React from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';

const LetterKeyListener = ({ isPlaying, onKeyDown }) => isPlaying ? (
  <EventListener
    target="window"
    onKeyDownCapture={onKeyDown}
  />
) : null;

LetterKeyListener.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default LetterKeyListener;