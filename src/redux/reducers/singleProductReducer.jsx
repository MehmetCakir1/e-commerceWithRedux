import {
    SET_SINGLE_PRODUCT
} from "../types/productsTypes"


export const singleProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case SET_SINGLE_PRODUCT:
        return { ...state, ...payload };
    //   case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //     return {};
      default:
        return state;
    }
  };