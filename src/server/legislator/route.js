var control = require('./control.js');

function loadRoutes(app) {
  app.get('/legislators', control.getLegislators);
}

module.exports = {
  loadRoutes
};
