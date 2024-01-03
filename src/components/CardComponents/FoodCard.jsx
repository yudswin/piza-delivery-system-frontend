import React, { useState, useEffect } from 'react';
import { AddFoodButton, StyledFoodCard, StyledFoodMeta } from './style';


const FoodCard = ({ name, price }) => {
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        import(`../../assets/items/type/${name}.png`)
            .then((image) => {
                setImgSrc(image.default);
            })
            .catch((err) => {
                console.error('Failed to load image', err);
            });
    }, [name]);

    return (
        <StyledFoodCard
            hoverable
            bodyStyle={{ padding: `0px 10px 100px 10px`, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            cover={
                <img
                    alt={name}
                    src={imgSrc}
                    style={{
                        width: '220px',
                        height: '150px',
                        objectFit: 'cover',
                        display: 'block',
                        margin: 'auto',
                        padding: '10px',
                        borderRadius: '20px'
                    }}
                />
            }
        >
            <div style={{ display: 'flex', width: '200px', maxHeight: '200px'}}>
                <StyledFoodMeta title={name} description="Còn gì hấp dẫn bằng việc thưởng thức combo burgur double cheese , coca & khoai tây chiên với deal siêu hời cho brunch" />
            </div>
            <span style={{
                position: 'absolute',
                bottom: '55px',
                borderRadius: '20px',
                fontFamily: 'Poppins',
                fontWeight: 'thin',
                color: '#f49001',
                padding: '5px 10px'
            }}>
                {price} VND
            </span>
            <AddFoodButton style={{
                position: 'absolute',
                bottom: '20px',
                borderRadius: '20px',
                borderColor: '#f49001',
                color: '#f49001',
                fontWeight: 'thin',
            }}>
                Add to Cart
            </AddFoodButton>
        </StyledFoodCard>
    );
}

export default FoodCard;