import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
rootElement
);


