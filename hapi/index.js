'use strict';

const Hapi = require('@hapi/hapi');
const path = require('path');
const routes = require(path.join(__dirname, 'routes')).routes;

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'] // an array of origins or 'ignore'           
      }
    }
  });

  server.route(routes);

  const start = async function () {
    try {
      await server.start();
      console.log('Server running on %s', server.info.uri);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };

  start();
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();