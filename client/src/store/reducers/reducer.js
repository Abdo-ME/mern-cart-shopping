// this file to Combine all Reducer togather
import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
export default combineReducers({
    products: productsReducer,
})