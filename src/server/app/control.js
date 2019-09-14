var model = require('./model.js');
var view = require('./view.js');

function initModel() {
    model.importCoLegislators();
}

function getMainPage(req, res) {
  view.mainPage(res);
}

module.exports = {
  initModel,
  getMainPage
};
