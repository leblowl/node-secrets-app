import { e } from 'util/react.js';
import { connect } from 'react-redux';
import * as event from 'app/event.js';

const legislator = function({ legislator, onSelect }) {
  let selectedClass = legislator.selected ? ' selected' : '';

  return e('div', {'className': 'legislator-item' + selectedClass},
           e('div', {'className': 'selector',
                     'onClick': () => onSelect(legislator.ndx)}),
           e('span', {'className': 'name'}, legislator.name),
           e('span', null, legislator.city));
}

const _legList = function({ legislators, selectLegislator }) {
  return e('div', {'className': 'legislator-list'},
           e('h4', {'className': 'title'}, 'Legislators'),
           e('ul', {'className': 'body'}, legislators.map((l) => {
             return e('li', {'key': 'legislator-' + l.ndx},
                      e(legislator, {
                        'legislator': l,
                        'onSelect': selectLegislator
                      }));
           })));
}

const legList = connect(
  (model) => {
    return {
      legislators: model.legislators
    };
  },
  (dispatch) => {
    return {
      selectLegislator: (ndx) => {
        dispatch(event.selectLegislator(ndx))
      }
    };
  }
)(_legList);

function app() {
  return e('div', {'className': 'app-container'},
           e(legList));
}

export { app };
