import {
    SET_SINGLE_PRODUCT,
    LOADING,
    INCREMENT,
    DECREMENT,
    RESET
} from "../types/productsTypes"

const intialState = {
  singleProduct: {},
  loading:false,
  amount:1
};

export const singleProductReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case SET_SINGLE_PRODUCT:
        return { ...state, ...payload,loading:false };
        case LOADING:
          return { ...state, ...payload,loading:payload };
        case INCREMENT:
            return { ...state, ...payload,loading:false,amount:state.amount+1};
        case DECREMENT:
            return { ...state, ...payload,loading:false,amount:state.amount-1};
        case RESET:
            return { ...state, ...payload,loading:false,amount:1};
      default:
        return state;
    }
  };