import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    // add items to the cart 
    const handleAddToCart = (product) => {
        const cartItems = [...cart, product];
        setCart(cartItems);
        // console.log(cart);
    }

    return (
        <div className='row w-100'>
            <div className="col-12 col-md-9 order-sm-12 mx-auto">
                <div className='row g-4 mt-3'>
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>
            <div className="col-12 col-md-2 order-sm-1 bg-warning">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Products;