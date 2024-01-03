import { Card } from 'antd';
import styled from 'styled-components';
import background from '../../assets/backgroundCategory.png';

const { Meta } = Card;

export const CartContainer = styled.footer`
    background-image: url(${background});
    background-size: cover;
    width: 450px;
    height: 600px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`

export const HeaderText = styled.div`
    font-family: 'Poppins';
    font-size: 28px;
    font-weight: bold;
    text-align: left;
    color: #f49001;
    padding: 5px 10px;
`

export const StyledCard = styled(Card)`
    && {
        width: 240;
        border-radius: 15px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        outline: 10px solid transparent;
        display: flex;
        felx-direction: row;
        margin: 15px 10px;
        }

        .ant-card-meta-description {
            font-family: 'Popins';
            font-size: 14px;
            text-align: justify;
            color: #3c2615;
            padding: 5px 10px;
        }
    }
`

export const StyledMeta = styled(Meta)`
    && {
        .ant-card-meta-title {
            color: #f49001;
            font-family: 'Poppins';
            text-align: left;
            font-size: 18px;
            paddingleft: 10px;
            width: 200;
    }
`