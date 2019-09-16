var express = require('express');
var control = require('./control.js');
var legislator = require('../legislator/route.js');

function loadRoutes(app) {
  app.get('/', control.getMainPage);
  app.use(express.static('dist/client'));

  legislator.loadRoutes(app);
}

module.exports = {
  loadRoutes
};
