import * as types from '../actionTypes/folk';
import { getRemainingTries } from '../reducers/folk';
import { gameOver } from './game';

export const hangTheFolk = () => (dispatch, getState) => {
  const remainingTries = getRemainingTries(getState());
  const bodyPartIndex = 11 - remainingTries;

  if (remainingTries <= 1) {
    dispatch(folkHanged(bodyPartIndex));
    dispatch(gameOver());
  } else {
    dispatch(folkHanged(bodyPartIndex));
  }
};

export const folkHanged = index => ({
  type: types.FOLK_HANGED,
  payload: { index },
});