import {CART_ADD_ITEM} from "../constants/cartConstants"

export const cartReducer = (state = {cartItems: [] }, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
        //put the payload in a variable
        const item = action.payload
        //find this payload if it is in the cart items
        const existItem = state.cartItems.find(i => i.product === item.product)

        //if exist return the state and the new item with the same id if the user update it
        //else return the state with the new item
        if(existItem){
            return {
                ...state,
                cartItems: state.cartItems.map(i => i.product === existItem.product ? item : i)
            }
        } else {
            return {
                ...state,
                cartItems: [...state.cartItems, item]
            }
        }

        default:
             return state
    }
}