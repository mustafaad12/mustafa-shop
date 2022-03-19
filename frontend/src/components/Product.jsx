import React from 'react'
import {Card} from "react-bootstrap";

const Product = ({product}) => {
  const url = "./product/" + product._id
  return (
    <Card className="my-3 p-3 rounded">

      <a href={url}>
        <Card.Img src={product.image} />
      </a>

      <Card.Body>

       <a href={url}>
       <Card.Title as="div">
         <strong>{product.name}</strong>
       </Card.Title>
       </a>

       <Card.Text as="div">
         <div className="my-3">
           {product.rating} from {product.numReviews} reviews
         </div>
       </Card.Text>

       <Card.Text as="h3">
         ${product.price}
       </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default Product
