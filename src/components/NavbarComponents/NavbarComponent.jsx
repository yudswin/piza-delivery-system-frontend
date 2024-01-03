import React from 'react';
import { CardWrapper } from './style';
import NavCardComponent from '../CardComponents/NavCardComponent';

const NavBarComponent = () => {
    const arr = ['Pizza', 'Combo', 'Burger', 'Sandwich', 'Smoothie', 'Snack', 'Drink'];
    return (
        <nav>
            <CardWrapper>
                {arr.map((type) => {
                    return (
                        <NavCardComponent name={type} />
                    )
                })}
            </CardWrapper>
        </nav>
    );
};

export default NavBarComponent;