import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Card style={{ width: '18rem' }} key={product?.id}>
      <Link to={`/products/${product?.id}`}>
       <Card.Img variant="top" src={product?.thumbnail} />
      </Link>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          {product?.description?.substring(0,70)}...
        </Card.Text>
        <Card.Text>
          {product?.price} $
        </Card.Text>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
