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


    const handleAddToCart = (product) => {
        if (cart.length <= 3) {
            const cartItems = [...cart, product];
            setCart(cartItems);
            // console.log(cart);
        }
        else {
            alert("4 Items already added");
        }
    }

    const randomItemSelector = () => {
        var item = cart[Math.floor(Math.random() * cart.length)];
        console.log(item);
        // setCart(item);
        // console.log(cart);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <div className='row w-100'>
            <div className="col-12 col-md-9 order-sm-12 mx-auto">
                <div className='row container g-2 mx-auto mt-3'>
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>
            <div className="col-12 col-md-3 order-sm-1 bg-warning">
                <Cart cart={cart} randomItemSelector={randomItemSelector} clearCart={clearCart}></Cart>
            </div>

        </div>
    );
};

export default Products;