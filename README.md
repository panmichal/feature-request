# Feature request app

## Tech stack

The app uses the isomorphic (http://isomorphic.net) and singe-state-atom (Redux) patterns 

 - React.js + Redux - client-side
 - Express.js - server
 - MongoDB - storage
 
## What's missing

 - tests
 - server-side validation
 - authentication and authorization

## Running development mode

 Install global and local libs:

 `npm i -g babel`

 `npm i -g nodemon`

 `npm i`


 - Run webpack in dev mode for serving statics assets from the server: `babel-node webpack.development.js`
 - Run server in dev mode: `NODE_ENV=development nodemon --exec npm run babel-node -- index.js`
