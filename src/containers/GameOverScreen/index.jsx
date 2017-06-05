import React from 'react';
import { connect } from 'react-redux';
import { getIsPlaying } from '../../reducers/game';
import GameOverScreen from '../../components/GameOverScreen';

const mapStateToProps = state => ({
  isPlaying: getIsPlaying(state),
});

const GameOverScreenContainer = connect(
  mapStateToProps,
)(GameOverScreen);

GameOverScreenContainer.displayName = 'GameOverScreenContainer';

export default GameOverScreenContainer;