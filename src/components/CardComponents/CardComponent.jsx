import React, { useState, useEffect } from 'react';
import {StyledMenuCard, StyledMenuMeta } from './style';


const CardComponent = ({ name }) => {
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        import(`../../assets/items/type/${name}.png`)
            .then((image) => {
                setImgSrc(image.default);
            })
            .catch((err) => {
                // console.error('Failed to load image', err);
            });
    }, [name]);

    return (
        <StyledMenuCard
            hoverable
            bodyStyle={{ padding: '10px' }}
            cover={
                <img
                    alt={name}
                    src={imgSrc}
                    style={{
                        width: '200px',
                        height: '150px',
                        objectFit: 'cover',
                    }}
                />
            }
        >
            <StyledMenuMeta title={name} />
        </StyledMenuCard>
    );
}

export default CardComponent;