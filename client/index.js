import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from 'reducers';

injectTapEventPlugin();

const initialState = window.INITIAL_STATE;
console.log(window.INITIAL_STATE);
const store = applyMiddleware(thunk)(createStore)(reducers(initialState));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));
