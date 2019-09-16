var express = require('express')
var control = require('./app/control.js');

let app;
let server;

function init() {
  control.initModel();
}

function loadRoutes(app) {
  app.get('/', control.getMainPage);
  app.use(express.static('dist/client'));
}

function start(port=3000) {
  init();
  app = express();
  loadRoutes(app);
  server = app.listen(port, () => console.log(`Listening on port ${port}...`));
}

function stop() {
  server.close();
}

module.exports = {
  start,
  stop
};
