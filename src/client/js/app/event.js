const SELECT_LEGISLATOR = 'legislator/selectLegislator';

function selectLegislator(ndx) {
  return {
    type: SELECT_LEGISLATOR,
    ndx
  }
}

export { SELECT_LEGISLATOR, selectLegislator };
