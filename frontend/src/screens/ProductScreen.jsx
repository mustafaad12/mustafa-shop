import React from 'react'
import {Link, useParams} from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap"
import Products from "../products"
import Rating from "../components/Rating"


const ProductScreen = () => {

  const {id} = useParams()

  const product = Products.find((p) => p._id === id)
  return (
    <>
    <Link className='btn btn-success my-3' to="/">
      Go Back
    </Link>

    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
           <Rating value={product.rating} text={product.numReviews + " reviews"}/>
          </ListGroup.Item>

          <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>

          <ListGroup.Item>
            Description: {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>
                  Price:
                </Col>
                <Col>
                  ${product.price}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>
                  Status:
                </Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
            <div className="d-grid gap-2">
              <Button className='btn-block'  type="button" disabled={product.countInStock === 0}>
                Add to Card
              </Button>
            </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default ProductScreen