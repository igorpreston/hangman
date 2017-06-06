import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root/index.prod';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore.prod';
import './styles/index';

const docRoot = document.getElementById('docroot');

export const store = configureStore({});

function renderClient (NextRoot, store) {
  return render(
    <AppContainer>
      <NextRoot
        store={store}
      />
    </AppContainer>,
    docRoot,
  );
};

export default renderClient(Root, store);