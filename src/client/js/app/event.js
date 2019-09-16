function selectLegislator(legId) {
  return {
    type: 'SELECT_LEGISLATOR',
    legId
  }
}

export { selectLegislator };
