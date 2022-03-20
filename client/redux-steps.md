1- instal redux react-redux redux-thunk
2- add folders #store and #reducer folder in #store
------------**#store\***----------------
file #store :
import { createStore,applyMiddleware,compose } from "redux";
import reducer from "./reducers/reducer";
import reduxThunk from "redux-thunk"
const initState = {}
const enhancer = window. **REDUX_DEVTOOLS_EXTENSION_COMPOSE** || compose;
const store = createStore(reducer, initState, enhancer(applyMiddleware(reduxThunk)));

export default store;

-----------------**#store/reducers\***----------------
---------------------#reducer--------------------
// this file to Combine all Reducer togather
//and we import that file in Store
import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
export default combineReducers({
products: productsReducer,
})

-------------------**#store/actions\***----------------
-------------------- #types-----------------------
#Exemple : export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
---------------#Action_Exemple---------------
File #Action_Exemple:
import { FETCH_PRODUCTS } from "./types"

//fetch products from API
export const fetchProducts = () => {
return dispatch => {
fetch("/api/products")
.then(res => res.json())
.then(data => {
dispatch({
type: FETCH_PRODUCTS,
data: data
})
})
}
}

---

------------------**#App\***--------------------
3- Add the store and provider to the App

import { Provider } from "react-redux";
import store from './store/store';
const App= ()=>{
return (
<Provider store={store}>

<div className ={app}>
Code//
</div>
</Provider>
)
};
-------------------------------------------------------
4- connect the View App with Redux by connect packeg
