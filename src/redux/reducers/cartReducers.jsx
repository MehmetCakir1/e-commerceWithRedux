import {
    CART,
    REMOVE,
} from "../types/productsTypes"



const initialState = {
    cart: []
  };
export const cartReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case CART:
            return {cart:payload}
        case REMOVE:
            return { cart: [...state.cart.filter((item)=>item.id!==payload)]}
        default:
            return state;
}
}
