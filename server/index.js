import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import App from './generated/app';
import mongoose from 'mongoose';
import RequestSchema from './model/request';
import RequestRepository from './repository/request';

const app = express();

mongoose.connect('localhost:27017');
mongoose.connection.on("error", function(err) {
  console.log(err);
});

// Define actions that require db connection
mongoose.connection.once('open', () => {
  console.log('Succesfully connected to Mongo');
  const Request = mongoose.model("Request", RequestSchema);

  app.get('/', (request, response) => {
    RequestRepository.findAllByClient(1)
    .then(requests => {
      const initialState = {
        form: 'request',
        requests,
        selectedClient: 2,
        view: 'list',
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
  });

  app.get('/requests', (request, response) =>{
    if (request.query.client) {
      RequestRepository.findAllByClient(request.query.client)
      .then(requests => {
        response.json(requests);
      })
    } else {
      RequestRepository.findAll()
      .then(requests => {
        response.json(requests);
      })
    }
  });

  app.post('/requests', (request, response) => {
    RequestRepository.add(request.body)
    .then(request => {
      response.json(request);
    })
  })
})

// View templates
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

// Static assets
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

export default app;
