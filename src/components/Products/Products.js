import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomItem, setRandomItem] = useState([]);

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

    // const deleteFromCart = (id) => {
    //     const restItems = cart.filter(items => )
    // }

    const randomItemSelector = () => {
        var item = cart[Math.floor(Math.random() * cart.length)];
        // setRandomItem(item);

        alert(item.name);

        setCart([]);
        // setCart(item)

        // console.log(item);
        // console.log(cart);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <div className='row w-100'>
            <div className="col-12 col-md-9 order-12 mx-auto">
                <div className='row container g-2 mx-auto mt-3'>
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>
            <div className="col-12 col-md-3 order-1 bg-warning">
                <Cart cart={cart} randomItem={randomItem} randomItemSelector={randomItemSelector} clearCart={clearCart}></Cart>
            </div>

        </div>
    );
};

export default Products;