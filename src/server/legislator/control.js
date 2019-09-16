var model = require('./model.js');
var view = require('./view.js');

function initModel() {
  model.importCoLegislators();
}

function getLegislators(req, res) {
  view.listLegislators(model.getLegislators(), res);
}

module.exports = {
  initModel,
  getLegislators
};
