import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Link, useParams, useNavigate, useLocation} from "react-router-dom"
import {Row, Col, Card, Form, ListGroup, Image, Button} from "react-bootstrap"
import Message from "../components/Message"
import {addToCart, removeFromCart} from "../actions/cartActions"

const CartScreen = () => {

  const navigate = useNavigate()

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

  //remove item from the card function
  const removeFromCardHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  //checkout function
  const checkoutHandler = () => {
    navigate(`/login?redirect=shipping`)
  }

  return (
    <>
     <h1>cart screen</h1>

     {cartItems.length === 0
     ? <Message>cart is empty <Link to="/">go back</Link></Message>
     :
      <Row>
        <Col md={8}>
          <ListGroup>
            {
              cartItems.map((item) => {
                // item.product it is the id of the item
                return (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>

                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>

                    <Col md={2}>
                      {item.price}
                    </Col>

                    <Col md={2}>
                      <Form.Control as="select"
                       value={item.qty}
                       onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                      {
                        [...Array(item.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}> {x + 1} </option>
                        ))
                      }
                     </Form.Control>
                  </Col>

                  <Col md={2}>
                    <Button
                    type='button'
                    variant="light"
                    onClick={() => removeFromCardHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                  </Row>
                </ListGroup.Item>
                )
              })
            }
          </ListGroup>
       </Col>

       <Col md={4}>
         <Card>
            <ListGroup>
              <ListGroup.Item>
                SubTotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) Items
              </ListGroup.Item>

              <ListGroup.Item>
                Total Price ({cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)})
              </ListGroup.Item>

              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button
                   type="button"
                   className='btn-block'
                   onClick={checkoutHandler}
                    >Press To Checkout</Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
         </Card>
        </Col>
     </Row>
     }
    </>
  )
}

export default CartScreen
