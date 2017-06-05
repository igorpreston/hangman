import React from 'react';
import { connect } from 'react-redux';
import { getIsPlaying } from '../../reducers/game';
import { guessLetter } from '../../actions/game';
import LetterKeyListener from '../../components/LetterKeyListener';

const mapStateToProps = state => ({
  isPlaying: getIsPlaying(state),
});

const mapDispatchToProps = dispatch => ({
  onKeyDown: e => {
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 189) {
      dispatch(guessLetter(e.key));
    }
  },
});

const LetterKeyListenerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LetterKeyListener);

LetterKeyListenerContainer.displayName = 'LetterKeyListenerContainer';

export default LetterKeyListenerContainer;