import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RandomItem from '../RandomItem/RandomItem';
import './Cart.css';

const Cart = ({ cart, randomItemSelector, clearCart, randomItem }) => {

    // console.log(props.cart);

    return (
        <div className='sticky-top mt-5 pt-5'>
            <h4 className='py-3 text-center'>Order Summary</h4>
            <h5>You added: </h5>
            {
                cart.map(items => <div className='d-flex bg-info p-2 rounded mt-2'>
                    <img className='cart-image' src={items.img} alt="" />
                    <p className='my-auto ms-3'>{items.name}</p>
                    <button className='btn my-auto ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>)
            }
            <div className="d-flex justify-content-center mt-3">
                {/* <RandomItem randomItemSelector={randomItemSelector} randomItem={randomItem}></RandomItem> */}
                <button onClick={randomItemSelector} className='btn btn-info ms-3'>Select 1</button>
                <button onClick={clearCart} className='btn btn-danger ms-3'>Clear Cart</button>
            </div>

        </div>
    );
};

export default Cart;