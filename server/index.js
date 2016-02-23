import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import App from './generated/app';
import config from './config/config';

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
    searchAutocomplete: [],
    searchResults: [
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

app.get('/autocomplete', (request, response) => {
  const a = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete'
  });
  a.get('/json', {
    params: {
      input: request.query.input,
      key: config.googleApiKey
    }
  })
  .then((res) => {
    response.json(res.data.predictions.map((p) => p.description));
  })
  .catch(() => {
    response.json([]);
  });
});

app.get('/search', (request, response) => {
  response.json([
    { site: "Thorn tree", body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos", id: 1},
    { site: "Tripadvisor", body: "Nice city", id: 2},
  ]);
});

export default app;
