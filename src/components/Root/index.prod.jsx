import React from 'react';
import { Provider } from 'react-redux';
import './styles';

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="root">

    </div>
  </Provider>
);

export default Root;