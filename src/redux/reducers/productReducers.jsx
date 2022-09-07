import {
    SET_PRODUCTS,
} from "../types/productsTypes"

const intialState = {
    products: [],
  };

export const allProductsReducer = (state=intialState,{type,payload})=>{
    switch (type) {
        case SET_PRODUCTS:
          return { ...state, products: payload };
        default:
          return state;
      }
}


