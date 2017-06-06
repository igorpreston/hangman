import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root/index.prod';
import configureStore from './store/configureStore.prod';
import { fetchWord } from './actions/word';
import './styles/index';

const docRoot = document.getElementById('docroot');

export const store = configureStore({});

store.dispatch(fetchWord());

function renderClient (NextRoot, nextStore) {
  return render(
    <NextRoot
      store={store}
    />,
    docRoot,
  );
};

export default renderClient(Root, store);