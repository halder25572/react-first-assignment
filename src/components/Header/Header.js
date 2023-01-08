import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='menu'>
            <div>
                <a href='./home'>Home</a>
                <a href='./about'>About</a>
                <a href='./order'>Order</a>
                <a href='./contact'>Contact</a>
            </div>
        </div>
    );
};

export default Header;