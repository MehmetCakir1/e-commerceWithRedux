import {
    CART
} from "../types/productsTypes"

const intialState = {
    cart:[
        // {
        // image:"",
        // title:"",
        // amount:"",
        // price:"",
        // date:"",
        // id:"",}
    ]
  };

export const cartReducer = (state=intialState,{type,payload})=>{
    switch (type) {
        case CART:
            return {cart:[...state.cart,{payload}]}
        // case CLEAR_ALL:
        //     return { ...state,cart: [...state.cart,{payload}]}
        default:
            return state;
}
}
