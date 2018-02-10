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
const path = require('path');
const express = require('express');
const next = require('./next');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

const start = async port => {
    // Couple Next.js with our express server.
    // app and handle from "next" will now be available as req.app and req.handle.
    await next(app);

    // Normal routing, if you need it.
    // Use your SSR logic here.
    // Even if you don't do explicit routing the pages inside app/pages
    // will still get rendered as per their normal route.
    app.get('/main', (req, res) =>
        req.app.render(req, res, '/', {
            routeParam: req.params.routeParam
        }));

    app.listen(port);
};

// Start the express server.
start(3000);
