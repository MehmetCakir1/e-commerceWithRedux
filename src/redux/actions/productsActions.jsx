import {
    SET_PRODUCTS,
    SET_SINGLE_PRODUCT
} from "../types/productsTypes"


export const setProduct = (payload) => {
    return { type: SET_PRODUCTS, payload: payload };
  };
  
export const setSingleProduct = (payload) => {
    return { type: SET_SINGLE_PRODUCT, payload: payload };
  };