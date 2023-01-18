import { createStore, applyMiddleware } from "redux";
import { fetchProductsReducer } from "./reducers";
import thunk from "redux-thunk";
export const store = createStore(fetchProductsReducer, applyMiddleware(thunk));
