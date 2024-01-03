import React from 'react'
import { WrapperSliderStyle } from './style'

const SliderComponent = ({ arrImage }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return (
        <WrapperSliderStyle {...settings}>
            {arrImage.map((item) => {
                return (
                    <div>
                        <img key={item} src={item} alt="slider" style={{width: '100%', height: '100%',  objectFit: 'cover', borderRadius: '10px', alignContent: 'center' }} />
                    </div>
                )
            })}
        </WrapperSliderStyle>
    )
}

export default SliderComponent