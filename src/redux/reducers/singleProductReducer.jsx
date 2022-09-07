import {
    SET_SINGLE_PRODUCT
} from "../types/productsTypes"

const intialState = {
  singleProduct: [],
};

export const singleProductReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case SET_SINGLE_PRODUCT:
        return { ...state, ...payload };
      default:
        return state;
    }
  };