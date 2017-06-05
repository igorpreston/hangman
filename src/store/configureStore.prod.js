import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunk),
);

export default function configureStore (initialState) {
	return createStore(rootReducer, fromJS(initialState), enhancer);
};
