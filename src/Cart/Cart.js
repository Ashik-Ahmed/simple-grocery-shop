import React from 'react';

const Cart = (props) => {
    console.log(props.cart.id);

    // const { id } = props.cart;

    return (
        <div className='sticky-top mt-5 pt-5'>
            <h4 className='py-3 text-center'>Order Summary</h4>
            <h5>You added: </h5>
            <p>{props.cart.length}</p>
        </div>
    );
};

export default Cart;