/* eslint-disable no-param-reassign */
const next = require('next');
const path = require('path');

const dev = !(process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production');
const app = next({ dev, dir: path.join(__dirname, '../app/') });
const handle = app.getRequestHandler();

// server = express app
module.exports = async server => {
    await app.prepare();
    // Middleware to insert app and handle inside the req object.
    server.use('/', (req, res, n) => {
        req.app = app;
        req.handle = handle;
        n();
    });
    server.originalListen = server.listen;
    server.listen = port => {
        // If none of the custom routing handlers from express are hit,
        // defer to next's own handler.
        server.get('*', (req, res) => {
            req.handle(req, res);
        });
        server.originalListen(port);
    };
    return server;
};
