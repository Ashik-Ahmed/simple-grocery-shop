import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const Product = (props) => {

    const { id, name, price, img } = props.product;

    return (
        <CardGroup className='col-12 col-md-4 mt-5 pt-5'>
            <Card>
                <Card.Img className='mx-auto p-3 border border-rounded' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><b>Price: ${price}</b></Card.Text>
                </Card.Body>
                <Card.Footer onClick={() => props.handleAddToCart(props.product)} className='btn text-center bg-warning fw-bold'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></Card.Footer>
            </Card>
        </CardGroup >
    );
};

export default Product;