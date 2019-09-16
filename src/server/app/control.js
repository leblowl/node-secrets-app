var legislatorModel = require('../legislator/model.js');
var view = require('./view.js');

function initModel() {
    legislatorModel.importCoLegislators();
}

function getMainPage(req, res) {
  view.mainPage(res);
}

module.exports = {
  initModel,
  getMainPage
};
