var express = require('express');
var control = require('./app/control.js');
var route = require('./app/route.js');

let app;
let server;

function init(app) {
  control.initModel();
  route.loadRoutes(app);
}

function start(port=3000) {
  app = express();
  init(app);
  server = app.listen(port, () => console.log(`Listening on port ${port}...`));
}

function stop() {
  server.close();
  app = null;
}

function restart() {
  stop();
  start();
}

module.exports = {
  start,
  stop,
  restart
};
