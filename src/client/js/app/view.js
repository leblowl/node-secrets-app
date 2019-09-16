import { e } from 'util/react.js';
import { connect } from 'react-redux';

const legislator = function({ legislator }) {
  return e("div", {"className": "legislator-item"},
           e("span", null, legislator.name),
           e("span", null, legislator.city));
}

const _legList = function({ legislators, selectLegislator }) {
  return e("ul", null, legislators.map((l) => {
    console.log(l);
    return e("li", null, legislator({'legislator': l}));
  }));
}

const legList = connect(
  (model) => {
    console.log(model);
    console.log(model.legislators);
    return {
      legislators: model.legislators
    };
  },
  (dispatch) => (
    {
      selectLegislator: () =>
        dispatch({
          type: 'DESTROY_TODO'
        })
    }
  )
)(_legList);

function app() {
  return e("div", {"className": "app-container"},
           e("div", {"className": "title"}, "Legislators"),
           e(legList));
}

export { app };
