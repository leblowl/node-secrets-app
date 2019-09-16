// Legislator

function selectLegislator(model, { index }) {
  legislators = model.legislators;

  return legislators.map((leg, index) => {
    if (index === action.index) {
      return Object.assign({}, leg, {
        selected: true
      });
    }
  });
}

var legislatorReducers = {
  'legislator/selectLegislator': selectLegislator
}

// App

function buildReducer(reducers) {
  return function reducer(model = {}, action) {
    return (reducers[action.type] || reducers['default'])(model, action);
  }
}

var appReducers = {
  ...legislatorReducers,
  'default': (model, action) => model
};

var app = buildReducer(appReducers);

export { app };
