import { useState } from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = (props) => {
    const {carts} = props;

    return (
        <div className='cart'>
            <h2>Selected Fruit</h2>
            <div className='output'>
                {
                    carts.map(total => <CartProduct total={total}></CartProduct>)
                }
            </div>
            <button className='cart-btn1'>Choose 1 for Me</button>
            <br />
            <button onClick={() => props.reset()} className='cart-btn2'>Choose Again</button>
        </div>
    );
};

export default Cart;