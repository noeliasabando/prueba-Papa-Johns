import { createStore, combineReducers } from 'redux';
import checkout from './reducers/checkout';

const reducer = combineReducers({
  checkout
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;