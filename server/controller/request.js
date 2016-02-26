import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './../generated/app';
import RequestRepository from './../repository/request';


const controller = (app) => {

  // Render client app with initial state
  app.get('/', (request, response) => {
    RequestRepository.findAllByClient(1)
    .then(requests => {
      const initialState = {
        form: 'request',
        requests,
        selectedClient: 1,
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
        ],
        featureDescriptionModal: {
          open: false,
          currentRequest: null
        },
        initialValues: {
          client: 1,
          area: 1
        }
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
      return RequestRepository.reorderForClient(request.client, request.priority)
        .then(() => {
          return request;
        })
    })
    .then(request => {
      response.json(request);
    })
  });

  app.patch('/requests/:id', (request, response) => {
    RequestRepository.update(request.params.id, request.body)
    .then(request => {
      response.json(request);
    })
    .catch(error => {
      response.status(400).json(error);
    })
  });
}

export default controller;
