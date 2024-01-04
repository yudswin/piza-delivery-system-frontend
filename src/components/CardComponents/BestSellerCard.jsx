import React, { useState, useEffect } from 'react';
import { StyledBestMeta, StyledBestCard } from './style';

const BestSellerCard = ({ name, description }) => {
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
        <StyledBestCard
            hoverable
            bodyStyle={{ padding: '0 24px 20px' }}
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
                <StyledBestMeta title={name} description={description} />
            </div>
            
        </StyledBestCard>
    );
}

export default BestSellerCard;