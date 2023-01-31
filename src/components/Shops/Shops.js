import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';
import Product from '../Product/Product';
import './Shops.css'

const Shops = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    //cart reset work
    const reset = () => {
        setCarts([])
    }

    // remove selected item:
    const handleRemoveItem = (id) => {
        const remaining = carts.filter(product => product.id !== id);
        setCarts(remaining);
    }

    // cart delete button work
    // const deleteItem = () => {
    //     setCarts([])
    // }

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const addToCart = (product) => {
        const newCart = [...carts, product];
        setCarts(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts} reset={reset} handleRemoveItem={handleRemoveItem}></Cart>
                {/* <CartProduct handleRemoveItem={handleRemoveItem}></CartProduct> */}
            </div>
        </div>
    );
};

export default Shops;