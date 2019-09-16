var fs = require('fs');

const model = {'legislators': []};

function loadCoLegislators() {
  buffer = fs.readFileSync('rsrc/data/open-secrets/co-legislators.json');
  return JSON.parse(buffer)['legislator'];
}

function importCoLegislators() {
  model['legislators'] = loadCoLegislators();
}

function getLegislators() {
  console.log('hi ' + model);
  console.log(model['legislators'][0]);
  return model['legislators'];
}

module.exports = {
  model,
  loadCoLegislators,
  importCoLegislators,
  getLegislators
};
