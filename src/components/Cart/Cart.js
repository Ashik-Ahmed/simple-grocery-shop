import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart, randomItemSelector, clearCart, itemId } = props;

    // console.log(props.cart);
    console.log(itemId);

    return (
        <div className='sticky-top mt-5 pt-5'>
            <h4 className='py-3 text-center'>Cart Summary</h4>
            {
                cart.map(items => <div className='d-flex cart-item p-2 rounded mt-2'>
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