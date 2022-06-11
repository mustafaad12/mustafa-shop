import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"
import Loader from "../components/Loader"
// list products action
import {listProducts} from "../actions/productActions"

const HomeScreen = () => {

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const {loading, error, products} = productList


  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  return (
    <>
    {
      loading ? <Loader />
      : error ? <h3>{error}</h3>
      : <Row>
      <h1>latest products</h1>
      {
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
          ))
      }
  </Row>
    }
      
    </>
  )
}

export default HomeScreen
