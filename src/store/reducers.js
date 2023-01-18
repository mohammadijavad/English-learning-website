import { intialState } from "./apiActions";
import {
  FETCH_PRODUCTS_GET,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from "./ActionTypes";
export const fetchProductsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_GET:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PRODUCTS_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};
