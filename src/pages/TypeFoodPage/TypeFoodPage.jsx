import React from 'react';
import NavBarComponent from '../../components/NavbarComponents/NavbarComponent';
import Breadcrumb from '../../components/BreadcrumbComponents/Breadcrumb';
import CartPanel from '../../components/CartComponents/CartPanel';
import { HeadingTextWrapper, NavTitle, NavWrapper, WrapperBody, WrapperHeader } from './style';
import { Col } from 'antd';
import FoodCard from '../../components/CardComponents/FoodCard';

const TypeFoodPage = () => {
    const path = ['Home', 'Type']; 
    const food = [
        ['Burger', 100000],
        ['Pizza', 200000],
        ['Combo', 300000],
        ['Drink', 400000],
        ['Sandwich', 500000],
        ['Snack', 600000]
    ];

    return (
        <body style={{ backgroundColor: '#efefef', paddingLeft: '60px' }}>
            <WrapperHeader>
                <Col span={15}>
                    <div>
                        <NavTitle>
                            <Breadcrumb path={path} />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <HeadingTextWrapper> Menu </HeadingTextWrapper>
                            </div>
                        </NavTitle>
                        <NavWrapper>
                            <NavBarComponent />
                        </NavWrapper>
                    </div>
                </Col>
                <Col span={9} style={{ display: 'flex', alignContent: 'end' }}>
                    <CartPanel />
                </Col>
            </WrapperHeader>
            <WrapperBody>
                {food.map((type) => {
                    return (
                        <FoodCard name={type[0]} price={type[1]} />
                    )
                })}
            </WrapperBody>
        </body> 
    );
};

export default TypeFoodPage;