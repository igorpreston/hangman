import React from 'react';
import { Provider } from 'react-redux';
import DevTools from '../DevTools';
import Game from '../Game';
import './styles';

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="root">
      <Game />
      <DevTools />
    </div>
  </Provider>
);

export default Root;