import { combineReducers,createStore } from "redux";
import { cartReducer } from "./reducers/cartReducers";
import { menuReducer } from "./reducers/menuReducer";
import { allProductsReducer } from "./reducers/productReducers";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  cart:cartReducer,
  user:userReducer,
  showMenu:menuReducer,
});


export const getStore = () => {
    const store = createStore(rootReducer);
    return store;
  };