import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {

    const { id, name, price, img } = props.product;
    const { handleAddToCart, product } = props;

    return (
        <CardGroup className='col-12 col-md-4'>
            <Card className='item-container'>
                <Card.Img className='mx-auto p-1 border border-rounded' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><b>Price: ${price}</b></Card.Text>
                </Card.Body>
                <Card.Footer onClick={() => handleAddToCart(product)} className='btn text-center bg-warning fw-bold'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></Card.Footer>
            </Card>
        </CardGroup >
    );
};

export default Product;