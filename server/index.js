import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import App from './generated/app';

const app = express();

// View templates
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

// Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

// Routes
app.get('/', (request, response) => {
  const initialState = {
    form: 'request',
    requests: [
      { id: 1, title: 'Lorem Ipsum1', description: 'Really nice and easy to implement'},
      { id: 2, title: 'Lorem Ipsum2', description: 'Really nice and easy to implement'},
      { id: 3, title: 'Lorem Ipsum3', description: 'Really nice and easy to implement'},
      { id: 4, title: 'Lorem Ipsum4', description: 'Really nice and easy to implement'},
    ],
    clients: [
      { id: 1, name: 'ClientA'},
      { id: 2, name: 'ClientB'},
      { id: 3, name: 'ClientC'}
    ],
    areas: [
      { id: 1, name: 'Policies'},
      { id: 2, name: 'Billing'},
      { id: 3, name: 'Claims'},
      { id: 4, name: 'Reports'}
    ]
  };
  const store = createStore((state=initialState) => state);
  const appContent = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  response.render('app', {
    app: appContent,
    initialState: JSON.stringify(initialState)
  });
});

export default app;
