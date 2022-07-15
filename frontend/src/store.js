//apply middleware to add thunk middleware to create store 
import {createStore, combineReducers, applyMiddleware} from "redux"
//middleware to make redux work with asynchronous when action creator use diapatch
import thunk from "redux-thunk"
//to work with redux dev tools in the browser
import {composeWithDevTools} from "redux-devtools-extension"

import {productListReducer, productDetailsReducer} from "./reducers/productReducers"

import {cartReducer} from "./reducers/cartReducers"

//now i dont have reducers so it is just empty object
const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

// get caed items from local storage to be initial state
const cartItemsFromStorage = localStorage.getItem("cartItem")
 ? JSON.parse(localStorage.getItem("cartItem"))
 : []

//store initial state it is empty object for now 
//if i want something loaded when redux store load initially i will put it here
const initialState = {
    cart: {cartItems: cartItemsFromStorage}
}
// store has reducers and initial state 
// also has compose with dev tools to see the redux in the browser and apply middleware inside it 
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store 