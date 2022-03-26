import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cartItems = props.cart;

    // console.log(props.cart);

    return (
        <div className='sticky-top mt-5 pt-5'>
            <h4 className='py-3 text-center'>Order Summary</h4>
            <h5>You added: </h5>
            {
                cartItems.map(items => <div className='d-flex bg-info p-2 rounded mt-2'>
                    <img className='cart-image' src={items.img} alt="" />
                    <p className='my-auto ms-3'>{items.name}</p>
                    <button className='btn my-auto ms-3'><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>)
            }
            <div className="d-flex justify-content-center mt-3">
                <button onClick={props.randomItemSelector} className='btn btn-info'>Select 1</button>
                <button onClick={props.clearCart} className='btn btn-danger ms-3'>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;