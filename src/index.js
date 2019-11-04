import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import postReducer from './redux/reducers/postReducer'
import { Provider } from 'react-redux'

const store = createStore(postReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
