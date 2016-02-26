import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './generated/app';
import mongoose from 'mongoose';
import requestController from './controller/request';

const app = express();

mongoose.connect('localhost:27017');
mongoose.connection.on("error", function(err) {
  console.log(err);
});

// Create controllers that require db connection
mongoose.connection.once('open', () => {
  console.log('Succesfully connected to Mongo');
  requestController(app);
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
