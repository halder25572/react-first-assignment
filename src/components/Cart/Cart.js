import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = (props) => {
    const {carts} = props;

    // remove selected item
    const deleteItem = (id) => {
        
    }

    return (
        <div className='cart'>
            <h2>Selected Fruit</h2>
            <div className='output'>
                {
                    carts.map(total => <CartProduct total={total} deleteItem={deleteItem}></CartProduct>)
                }
            </div>
            <button className='cart-btn1'>Choose 1 for Me</button>
            <br />
            <button onClick={() => props.reset()} className='cart-btn2'>Choose Again</button>
        </div>
    );
};

export default Cart;