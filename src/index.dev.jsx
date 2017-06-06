import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root/index.dev';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore.dev';
import { fetchWord } from './actions/word';
import './styles/index';

const docRoot = document.getElementById('docroot');

export const store = configureStore({});

store.dispatch(fetchWord());

function renderClient (NextRoot, nextStore) {
  return render(
    <AppContainer>
      <NextRoot
        store={nextStore}
      />
    </AppContainer>,
    docRoot,
  );
};

export default renderClient(Root, store);

if (module.hot) {
  module.hot.accept('./components/Root/index.dev', () => renderClient(Root, store));
}
