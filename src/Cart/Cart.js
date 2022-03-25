import React from 'react';

const Cart = (props) => {

    const { id } = props.cart;

    console.log(props.cart);

    return (
        <div className='sticky-top mt-5 pt-5'>
            <h4 className='py-3 text-center'>Order Summary</h4>
            <h5>You added: </h5>
            {
                props.cart.map(items => <p>{items}</p>)
            }
        </div>
    );
};

export default Cart;