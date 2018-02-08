#!/usr/bin/env nodejs

/*
const http = require('http');
const https = require('https');
const config = require('./config');
const letsencrypt = require('./letsencrypt');

// Create Express web app
const app = require('./webapp');

// create  https server

if (config.FORCE_HTTPS) {
  letsencrypt(app);
} else {
  let server = http.createServer(app);
  server.listen(config.HTTP_PORT, () => {
    console.log('Server running......');
    console.log('http://localhost:' + config.HTTP_PORT + '/');
  });
}
*/
let path = require('path');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'prod';
const app = next({ dev, dir: path.join(__dirname, '../src/') });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Run the app by serving the static files
    // in the dist directory
   // server.use(express.static(path.join(__dirname, '../dist/static')));

    server.get('/p/:title', (req, res) => {
      const actualPage = '/post';
      const queryParams = { title: req.params.title };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
