import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {

    var itemId;

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomItem, setRandomItem] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        itemId = product.id;
        // console.log(product.id);
        if (cart.length <= 3) {
            const cartItems = [...cart, product];
            setCart(cartItems);
            // console.log(cart);

        }
        else {
            alert("You cannot add more than 4");
        }
    }

    const randomItemSelector = () => {
        var item = cart[Math.floor(Math.random() * cart.length)];
        setRandomItem(item);

        if (item) {
            alert(item.name);
        }
        setCart([]);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <div className='row w-100 mx-0 mt-5'>
            <div className="col-12 col-md-9 order-12 mx-auto">
                <h2 className='mt-3'>Shop your daily needs</h2>
                <div className='row container g-2 mx-auto mt-3'>
                    {
                        products.map((product, i) => <Product key={i} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
            </div>
            <div className="col-12 col-md-3 order-1 bg-warning">

                <Cart key={itemId} cart={cart} randomItemSelector={randomItemSelector} clearCart={clearCart}></Cart>

            </div>

        </div>
    );
};

export default Products;