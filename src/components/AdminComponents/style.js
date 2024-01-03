import { Row } from "antd"
import styled from "styled-components"


export const WrapperHeader = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 16px;
    background-color: #fff;
    gap: 24px;
    flex-wrap: nowrap;
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`

export const ItemWrappper = styled.div`
    display: flex;
    align-items: center;
    wrap: nowrap;
`

export const CartWrapper = styled.span`
    font-size: 17px;
    font-family: Poppins;
    color: #f49001;
    padding-left: 10px;
`

export const TextWrapper = styled.span`
    font-size: 15px;
    font-family: Poppins;
    font-style: bold;
    color: #f49001;
    padding-left: 10px;
`    
