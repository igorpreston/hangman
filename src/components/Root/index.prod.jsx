import React from 'react';
import classNames from 'classnames/bind';
import { Provider } from 'react-redux';
import Game from '../Game';
import styles from './styles';

const Root = ({ store }) => (
  <Provider store={store}>
    <div
      className={classNames.bind(styles)({
        root: true,
      })}
    >
      <Game />
    </div>
  </Provider>
);

export default Root;