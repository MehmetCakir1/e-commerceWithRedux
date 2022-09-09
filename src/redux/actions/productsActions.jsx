import {
    SET_PRODUCTS,
    SET_SINGLE_PRODUCT,
    LOADING,
    INCREMENT,
    DECREMENT,
    RESET,
    CART,
    USER,
    REMOVE,
    SHOW_MENU
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
export const increment = (payload ) => {
  return { type: INCREMENT,payload: payload  };
};

export const decrement = (payload) => ({ type: DECREMENT,payload: payload  });
export const reset = () => ({ type: RESET });

export const setCart = (payload)=>{
 return {type:CART,payload: payload} 
}
export const setUser = (payload)=>{
 return {type:USER, payload: payload} 
}
export const removeItem = (payload)=>{
 return {type:REMOVE, payload: payload} 
}
export const showSidebar = (payload)=>{
 return {type:SHOW_MENU, payload: payload} 
}
