import React, { useContext } from 'react'
import {Card, Button, Form, Row, Col} from 'react-bootstrap'
import { CartContext } from '../CartContext'


function ProductCart(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)
  return (
    <Card>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>£{product.price}</Card.Text>
            {productQuantity>0?
          <>
            <Form as={Row}>
              <Form.Label column='true' sm='6'>In Cart:{productQuantity}</Form.Label>
              <Col sm='6'>
                <Button sm='6' onClick={()=>cart.addOneToCart(product.id)} className='mx-2'>+</Button>
                <Button sm='6' onClick={()=>cart.removeOneFromCart(product.id)} className='mx-2'>-</Button>
              </Col>
            </Form>
            <Button variant='danger' className='my-2' onClick={()=>cart.deleteFromCart(product.id)}>Remove from Cart</Button>
          </>
          :<Button variant='primary' onClick={()=>cart.addOneToCart(product.id)}>Add to Cart</Button>  
          }
            
        </Card.Body>
    </Card>
  )
}

export default ProductCart