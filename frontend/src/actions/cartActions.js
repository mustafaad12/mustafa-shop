import axios from "axios"
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name : data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    //after diapatch i will save the entire cart items in the local storage as a string format
    // and this cart items cames from the store
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems))
}

//here i will dispatch the type and the id comes from cart screen
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    //after diapatch i will save the entire cart items in the local storage as a string format
    // and this cart items cames from the store
    localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems))
}