import {
    SHOW_MENU
 } from "../types/productsTypes"
 
 const intialState = {
   showMenu:false
 };
 
 export const menuReducer = (state = intialState, { type, payload }) => {
     switch (type) {
       case SHOW_MENU:
         return { ...state,showMenu:payload };
       default:
         return state;
     }
   };