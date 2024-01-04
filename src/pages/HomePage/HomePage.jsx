import React, { useEffect, useState } from "react";
import { FoodTypeWrapper, HeadingTextWrapper, MenuWrapper, HeaderTextWrapper, HeaderWrapper, FoodTypeTextWrapper, ViewMoreWrapper, BestSellerWrapper } from "./style";
import SliderComponent from "../../components/SliderComponents/SliderComponent";
import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import BestSellerCard from "../../components/CardComponents/BestSellerCard";
import CardComponent from "../../components/CardComponents/CardComponent";
import * as FoodService from '../../services/FoodService'

// image
import slider1 from '../../assets/sliders/slider1.jpg';
import slider2 from '../../assets/sliders/slider2.jpg';
import slider3 from '../../assets/sliders/slider3.jpg';
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
    const [typeFoods, setTypeFoods] = useState([])
    const [bestSellerFoods, setBestSellerFoods] = useState([])

    const fetchAllTypeProduct = async () => {
        try {
            const res = await FoodService.getAllTypeFood()
            if (res?.status === 'OK') {
                setTypeFoods(res?.data)
            }
        } catch (error) {
            // console.log('error', error);
        }
    }

    const fetchAllBestSeller = async () => {
        try {
            const res = await FoodService.getAllBestFood()
            // console.log('res', res);
            if (res?.status === 'OK') {
                setBestSellerFoods(res?.data)
            }
        } catch (error) {
            // console.log('error', error);
        }
    }

    // const { isLoading, data: products } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: fetchAllProduct,
    //     options: { retry: 3, retryDelay: 1000 }
    // });
    // console.log('data', products);

    useEffect(() => {
        fetchAllTypeProduct()
        fetchAllBestSeller()
    }, [])

    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <HeaderWrapper>
                <PhoneOutlined style={{ fontSize: '25px', color: '#efefef' }} />
                <HeaderTextWrapper>1999 9998</HeaderTextWrapper>
                <EnvironmentOutlined style={{ fontSize: '25px', color: '#efefef' }} />
                <HeaderTextWrapper>123/456 Vo Thi Sau Street, Ward 7, District 3, Ho Chi Minh City</HeaderTextWrapper>
            </HeaderWrapper>
            <div id="container" style={{ padding: '30px 100px' }}>
                <SliderComponent arrImage={[slider1, slider2, slider3]} />
            </div>
            <MenuWrapper>
                <div>
                    <FoodTypeTextWrapper>
                        <HeadingTextWrapper> Menu </HeadingTextWrapper>
                    </FoodTypeTextWrapper>
                    <FoodTypeWrapper>
                        {typeFoods.map((item) => {
                            return (
                                <CardComponent name={item} key={item} />
                            )
                        })}
                    </FoodTypeWrapper>
                </div>
                <div>
                    <FoodTypeTextWrapper style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <HeadingTextWrapper> Best Seller </HeadingTextWrapper>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                            <ViewMoreWrapper> View more </ViewMoreWrapper>
                        </div>
                    </FoodTypeTextWrapper>
                    <BestSellerWrapper>
                        {bestSellerFoods.map((product) => (
                            <BestSellerCard
                                key={product.name}
                                name={product.name}
                                description={product.description}
                            />
                        ))}
                    </BestSellerWrapper>
                </div>
            </MenuWrapper>
        </div>
    );
}

export default HomePage;