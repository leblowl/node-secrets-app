import * as redux from 'redux';
import * as reactRedux from 'react-redux';
import * as reactDom from 'react-dom';
import { e } from 'util/react.js';
import * as model from './app/model.js';
import * as reduce from './app/reduce.js';
import * as view from './app/view.js';

const store = redux.createStore(reduce.app, model.initialModel);

const app = function() {
  return e(reactRedux.Provider, {'store': store},
           e(view.app));
}

reactDom.render(app(), document.getElementById("app_mount"));
