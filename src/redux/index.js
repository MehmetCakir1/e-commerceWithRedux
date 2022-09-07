import { combineReducers,createStore } from "redux";
import { allProductsReducer } from "./reducers/productReducers";
import { singleProductReducer } from "./reducers/singleProductReducer";
const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer
});


export const getStore = () => {
    const store = createStore(rootReducer);
    return store;
  };