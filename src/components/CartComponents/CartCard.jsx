import React, { useState, useEffect } from 'react';
import { StyledMeta, StyledCard } from './style';
import { Button } from 'antd';

const CartCard = ({ name }) => {
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        import(`../../assets/items/type/${name}.jpg`)
            .then((image) => {
                setImgSrc(image.default);
            })
            .catch((err) => {
                console.error('Failed to load image', err);
            });
    }, [name]);

    return (
        <StyledCard
            hoverable
            bodyStyle={{ padding: '10px', display: 'flex', flexDirection: 'row' }}
            headStyle={{ padding: '5px' }}
            cover={
                <img
                    alt={name}
                    src={imgSrc}
                    style={{
                        width: '75px',
                        height: '75px',
                        objectFit: 'cover',
                        display: 'block',
                        margin: 'auto',
                        padding: '15px',
                        borderRadius: '30px'
                    }}
                />
            }
        ><StyledMeta title={name}/>
            <div style={{  }}>
                <div style={{ position: 'absolute', bottom: '10px', left: '100px'}}>
                    <Button>-</Button>
                    <span style={{ margin: '0 10px' }}>Qty</span>
                    <Button>+</Button>
                    <Button style={{ marginLeft: '10px' }}>Remove</Button>
                </div>
            </div>
        </StyledCard>
    );
}

export default CartCard;