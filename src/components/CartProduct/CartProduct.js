import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './CartProduct.css';

const CartProduct = (props) => {

    const {picture, name} = props.total;

    return (
        <div className='cart-product'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <FontAwesomeIcon style={{cursor:'pointer'}} icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default CartProduct;