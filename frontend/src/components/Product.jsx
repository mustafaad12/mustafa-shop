import React from 'react'
import {Link} from "react-router-dom"
import Rating from "./Rating"
import {Card} from "react-bootstrap"

const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">

      <Link to={`./product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>

      <Link className='product-name' to={`./product/${product._id}`}>
       <Card.Title as="div">
         <strong>{product.name}</strong>
       </Card.Title>
       </Link>

       <Card.Text as="div">
         <Rating value={product.rating} text={product.numReviews + " reviews"}/>
       </Card.Text>

       <Card.Text className='my-3' as="h3">
         ${product.price}
       </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default Product
