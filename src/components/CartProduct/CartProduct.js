import React from 'react';
import './CartProduct.css';

const CartProduct = (props) => {

    const {picture, name} = props.total;

    return (
        <div className='cart-product'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default CartProduct;