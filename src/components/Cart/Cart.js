import './Cart.css';

const Cart = (props) => {
    const {carts} = props;
    console.log(carts);


    let total = '';

    for(const names of carts){
       total = total + names.name;
    }

    return (
        <div className='cart'>
            <h2>Selected Fruit</h2>
            <div className='output'>
                <h4>{total}</h4>
            </div>
            <button className='cart-btn1'>Choose 1 for Me</button>
            <br />
            <button className='cart-btn2'>Choose Again</button>
        </div>
    );
};

export default Cart;