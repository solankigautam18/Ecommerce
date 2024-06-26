import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropownContainer,EmptyMessage,CartItems  } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropownContainer >
        <CartItems >
        {
            cartItems.length ? (cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))) : (
                <EmptyMessage>You're cart is Empty !</EmptyMessage>
            )
        }
        </CartItems>
            <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
        </CartDropownContainer>
    )
}

export default CartDropdown;