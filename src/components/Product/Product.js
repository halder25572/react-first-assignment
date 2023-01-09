import React from 'react';
import './Product.css'

const Product = (props) => {
    const {price, picture, name, id} = props.product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p><small>Id: {id}</small></p>
            <h2>{name}</h2>
            <p><small>Price: ${price}</small></p>
            <button className='btn' onClick={() => props.addToCart(props.product)}>
                <p className='text-btn'>Add Product</p>
            </button>
        </div>
    );
};

export default Product;