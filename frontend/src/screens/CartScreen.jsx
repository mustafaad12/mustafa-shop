import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {link, useParams, useNavigate, useLocation} from "react-router-dom"
import {Row, Col, Card, Form, ListGroup, Image, Button} from "react-bootstrap"
import Message from "../components/Message"
import {addToCart} from "../actions/cartActions"

const CartScreen = () => {

  const {id} = useParams()

  //get qty query value from url
  const search = useLocation().search;
  const qty = new URLSearchParams(search).get('qty');

  const dispatch = useDispatch()

  // get cart items from the store
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

  // dispatch action only if there is id or change id or qty
  useEffect(() => {
    if(id){
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  return (
    <div>
      cart screen
    </div>
  )
}

export default CartScreen
