import React, { useState, useEffect } from 'react';
import { Button, Col } from 'antd'
import Breadcrumb from '../../components/BreadcrumbComponents/Breadcrumb'
import CartPanel from '../../components/CartComponents/CartPanel'
import { WrapperBody, WrapperHeader, LeftSide, RightSide, TitleWrapper, SmallTitleWrapper, DescriptionWrapper } from './style'
import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import { HeaderTextWrapper, HeaderWrapper } from './style'

const FoodDetailPage = () => {
    const food = 'Pizza';
    const description = ['This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'];
    const path = ['Home', 'Type', food];
    const [imgSrc, setImgSrc] = useState('');
    useEffect(() => {
        import(`../../assets/items/type/${food}.jpg`)
            .then((image) => {
                setImgSrc(image.default);
            })
            .catch((err) => {
                console.error('Failed to load image', err);
            });
    }, [food]);

    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <HeaderWrapper>
                <PhoneOutlined style={{ fontSize: '25px', color: '#efefef' }} />
                <HeaderTextWrapper>1999 9998</HeaderTextWrapper>
                <EnvironmentOutlined style={{ fontSize: '25px', color: '#efefef' }} />
                <HeaderTextWrapper>123/456 Vo Thi Sau Street, Ward 7, District 3, Ho Chi Minh City</HeaderTextWrapper>
            </HeaderWrapper>
            <WrapperHeader>
                <Col span={15}>
                    <div>
                        <Breadcrumb path={path} />
                    </div>
                    <WrapperBody>
                        <LeftSide>
                            <TitleWrapper>{food}</TitleWrapper>
                            <img
                                alt={food}
                                src={imgSrc}
                                style={{
                                    width: '500px',
                                    height: '500px',
                                    objectFit: 'fill',
                                    paddingTop: '15px',
                                    borderRadius: '100px',
                                    boxShadow: '0 0 10px 10px #efefef'
                                }}
                            />
                        </LeftSide>
                        <RightSide>
                            <SmallTitleWrapper>Description</SmallTitleWrapper>
                            <DescriptionWrapper>{description}</DescriptionWrapper>
                            <Button style={{
                                backgroundColor: '#f49001',
                                color: '#efefef',
                                width: '100%',
                                borderRadius: '20px',
                                borderColor: '#f49001',
                                fontFamily: 'Poppins',
                                fontWeight: 'thin',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                            }}>
                                <span>Price VND</span>
                                <span>
                                    Add to Cart
                                </span>
                            </Button>
                        </RightSide>
                    </WrapperBody>
                </Col>
                <Col span={9}>
                    <CartPanel />
                </Col>
            </WrapperHeader>

        </div>
    )
}

export default FoodDetailPage