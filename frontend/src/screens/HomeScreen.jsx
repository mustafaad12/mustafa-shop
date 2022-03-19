import React from 'react'
import Products from "../products"
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"

const HomeScreen = () => {
  return (
    <>
      <Row>
          <h1>latest products</h1>
          {
              Products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
              ))
          }
      </Row>
    </>
  )
}

export default HomeScreen

