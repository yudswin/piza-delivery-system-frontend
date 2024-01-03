import React from 'react';
import { TextWrapper } from './style';

const Breadcrumb = ({ path }) => {
    return (
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '5px' }}>
            <TextWrapper>
                {path.map((item, index) => (
                    <span key={index}>
                        {item}
                        {index < path.length - 1 && ' > '}
                    </span>
                ))}
            </TextWrapper>
        </div>
    );
};

export default Breadcrumb;