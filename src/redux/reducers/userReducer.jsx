import {
   USER
} from "../types/productsTypes"

const intialState = {
  user:""
};

export const userReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case USER:
        return { ...state,user:payload };
      default:
        return state;
    }
  };