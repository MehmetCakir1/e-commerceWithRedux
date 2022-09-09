import { combineReducers,createStore } from "redux";
import { cartReducer } from "./reducers/cartReducers";
import { allProductsReducer } from "./reducers/productReducers";
import { singleProductReducer } from "./reducers/singleProductReducer";

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  cart:cartReducer
});


export const getStore = () => {
    const store = createStore(rootReducer);
    return store;
  };