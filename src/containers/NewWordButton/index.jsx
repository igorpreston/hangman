import React from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../actions/game';
import NewWordButton from '../../components/GameOverScreen/NewWordButton';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(restartGame()),
});

const NewWordButtonContainer = connect(
  null,
  mapDispatchToProps,
)(NewWordButton);

NewWordButtonContainer.displayName = 'NewWordButtonContainer';

export default NewWordButtonContainer;