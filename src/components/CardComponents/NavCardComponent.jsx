import React, { useState, useEffect } from 'react';
import { StyledNavCard, StyledNavMeta } from './style';


const NavCardComponent = ({ name }) => {
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
        <StyledNavCard
            hoverable
            bodyStyle={{ padding: '10px' }}
            headStyle={{ padding: '5px' }}
            cover={
                <img
                    alt={name}
                    src={imgSrc}
                    style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'fill',
                        display: 'block',
                        margin: 'auto',
                        padding: '0px',
                        borderRadius: '15px 15px 0 0'
                    }}
                />
            }
        >
            <StyledNavMeta title={name} />
        </StyledNavCard>
    );
}

export default NavCardComponent;
