import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import actionReducer from 'reducers';
import {reducer as formReducer} from 'redux-form';

injectTapEventPlugin();

const initialState = window.INITIAL_STATE;

const reducers = {
  data: actionReducer(initialState),
  form: formReducer
}

const store = applyMiddleware(thunk)(createStore)(combineReducers(reducers));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));
