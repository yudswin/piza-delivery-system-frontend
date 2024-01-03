import React from 'react';
import { CartContainer, HeaderText } from './style';
import CartCard from './CartCard';

const CartPanel = () => {
    // replace with your actual cart items
    const cartItems = ['Burger', 'Combo', 'Snack'];

    return (
        <div style={{ position: 'fixed', right: '150px' , top: '150px' }}>
            <HeaderText>My Cart</HeaderText>
            <CartContainer style={{ maxHeight:'1000px', overflow: 'auto'}}>
                <div style={{ padding: '10px' }}>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <CartCard name={item} />
                        </div>
                    ))}
                </div>
            </CartContainer>
        </div>
    );
};

export default CartPanel;