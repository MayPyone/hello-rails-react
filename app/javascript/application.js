import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 

import Message from './components/Message';

ReactDOM.render(
  <Provider store={store}>
    <Message />
  </Provider>,
  document.getElementById('root')
);