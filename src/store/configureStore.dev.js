import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
);

export default function configureStore (initialState) {
	const store = createStore(rootReducer, fromJS(initialState), enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
};
