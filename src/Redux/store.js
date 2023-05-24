// store.js

import { createStore, combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  login: reducer
});

const store = createStore(rootReducer);

export default store;
