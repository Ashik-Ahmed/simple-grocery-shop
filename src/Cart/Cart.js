import React from 'react';

const Cart = (props) => {

    const { id } = props.cart;
    console.log(id);
    return (
        <div className='sticky-top mt-5 pt-5'>
            <h4 className='py-3 text-center'>Order Summary</h4>
            <p>Total Product added: { }</p>
        </div>
    );
};

export default Cart;