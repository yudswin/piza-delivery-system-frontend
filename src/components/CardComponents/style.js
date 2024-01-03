import { Card, Button } from 'antd';
import styled from 'styled-components';
import background from '../../assets/backgroundCategory.png';

const { Meta } = Card;


export const StyledFoodCard = styled(Card)`
&& {
    width: 240;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    outline: 10px solid transparent;

    &:hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
    }
    .ant-card-meta-description {
        font-family: 'Popins';
        font-size: 14px;
        text-align: justify;
        color: #5a3500;
    }
}
`

export const StyledFoodMeta = styled(Meta)`
    && {
    .ant-card-meta-title {
        color: #f49001;
        font-family: 'Poppins';
        text-align: center;
        font-size: 18px;
    }
`

export const AddFoodButton = styled(Button)`
    font-family: 'Poppins';
    &:hover {
        transform: scale(1.05);
    }
`


export const StyledNavCard = styled(Card)`
    && {
        width: 240;
        border-radius: 15px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        outline: 10px solid transparent;

        &:hover {
            background-image: url(${background});
            background-size: cover;
            box-shadow: 0px 4px 20px rgba(246, 161, 40, 0.9);
            
            .ant-card-meta-title {
                color: #fff;
            }
            .ant-card-meta-description {
                color: white;
            }
        }
        .ant-card-meta-description {
            font-family: 'Popins';
            font-size: 14px;
            text-align: justify;
            color: #5a3500;
        }
    }
`

export const StyledNavMeta = styled(Meta)`
    && {
        .ant-card-meta-title {
            color: #f49001;
            font-family: 'Poppins';
            text-align: center;
            font-size: 18px;
        }
    }
`

export const StyledMenuCard = styled(Card)`
    &&&:hover {
        background-image: url(${background});
        background-size: cover;
        box-shadow: 0px 4px 20px rgba(246, 161, 40, 0.9);
        
        .ant-card-meta-title {
            color: #fff;
        }
        .ant-card-meta-description {
            color: white;
        }
    }
`

export const StyledMenuMeta = styled(Meta)`
    && {
        .ant-card-meta-title {
            color: #f49001;
            font-family: 'Poppins';
            text-align: center;
            font-size: 18px;
        }
    }
`

export const StyledBestCard = styled(Card)`
&& {
    width: 240;
    height: 320px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    outline: 10px solid transparent;

    .ant-card-meta-description {
        font-family: 'Poppins';
        font-size: 14px;
        text-align: justify;
        color: #5a3500;
        display: flex;
        justify-content: flex-end;
    }
}

&&&:hover {
    background-image: url(${background});
    background-size: cover;
    box-shadow: 0px 4px 20px rgba(246, 161, 40, 0.9);
    
    .ant-card-meta-title {
        color: #fff;
    }
    .ant-card-meta-description {
        color: #5a3500;
    }
}
`

export const StyledBestMeta = styled(Meta)`
    && {
        .ant-card-meta-title {
            color: #f49001;
            font-family: 'Poppins';
            text-align: center;
            align-items: center;
            font-size: 18px;
            height: 62px;
            white-space: normal;  
            display: flex;  
            justify-content: center;  
            align-items: center;  
        }   
    }
`