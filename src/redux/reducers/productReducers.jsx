import {
    SET_PRODUCTS,
    LOADING
} from "../types/productsTypes"

const intialState = {
    products: [],
    loading:false
  };

export const allProductsReducer = (state=intialState,{type,payload})=>{
    switch (type) {
        case SET_PRODUCTS:
          return { ...state, products: payload,loading:false };
        case LOADING:
          return {...state, product:[], loading:payload}
        default:
            return state;
}
}
