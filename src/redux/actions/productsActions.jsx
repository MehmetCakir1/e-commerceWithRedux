import {
    SET_PRODUCTS,
    SET_SINGLE_PRODUCT,
    LOADING,
    INCREMENT,
    DECREMENT,
    RESET
} from "../types/productsTypes"


export const setProduct = (payload) => {
    return { type: SET_PRODUCTS, payload: payload };
  };
  
export const setSingleProduct = (payload) => {
    return { type: SET_SINGLE_PRODUCT, payload: payload };
  };
export const setLoading = (payload)=> {
    return { type: LOADING, payload: payload };
  };
export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });