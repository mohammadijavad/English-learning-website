import { createStore, applyMiddleware } from 'redux';
import { fetchProductsReducer } from './reducers';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  fetchProductsReducer,
  //   applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
