var fs = require('fs');

const model = {'legislators': []};

function loadCoLegislators() {
  buffer = fs.readFileSync('rsrc/data/open-secrets/co-legislators.json');
  return JSON.parse(buffer)['legislator'];
}

function importCoLegislators() {
  model['legislators'] = loadCoLegislators();
}

module.exports = {
  model,
  loadCoLegislators,
  importCoLegislators
};
