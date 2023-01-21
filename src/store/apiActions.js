import {
  FETCH_PRODUCTS_GET,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from './ActionTypes';
export const intialState = {
  loading: true,
  products: [],
  teachers: [],
  error: '',
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_GET,
  };
};
export const fetchProductsSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILED,
    payload: error,
  };
};
