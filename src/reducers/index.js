import { combineReducers } from 'redux-immutable';
import game from './game';
import folk from './folk';
import word from './word';

export default combineReducers({
  game,
  folk,
  word,
});