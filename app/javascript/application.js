import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 

import Greeting from './components/Greeting';

ReactDOM.render(
  <Provider store={store}>
    <Greeting />
  </Provider>,
  document.getElementById('root')
);