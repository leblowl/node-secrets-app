import * as event from './event.js';

// Legislator

function selectLegislator(model, { ndx }) {
  let legislators = model.legislators;

  return Object.assign({}, model, {
    'legislators': legislators.map((leg, i) => {
      if (i === ndx) {
        return Object.assign({}, leg, {
          'selected': !leg.selected
        });
      } else {
        return leg;
      }
    })
  });
}

var legislatorReducers = {
  [event.SELECT_LEGISLATOR]: selectLegislator
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
