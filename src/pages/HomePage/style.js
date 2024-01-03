import { Row } from "antd"
import styled from "styled-components"

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center; 
    padding: 0 100px;
    background-color: #f49001;
    height: 45px;
`

export const HeaderTextWrapper = styled.div`
    font-size: 20px;
    font-family: 'Poppins';
    font-weight: 500;
    color: #efefef !important;
    padding-right: 50px;
`

export const MenuWrapper = styled.div`
    display: flex;
    padding: 0 100px;
    flex-direction: column;
`

export const FoodTypeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 0px 50px 0px;
    gap: 30px;
`

export const HeadingTextWrapper = styled.span`
    font-size: 30px;
    font-family: 'Poppins';
    font-weight: 700;
    color: #f49001;
`

export const FoodTypeTextWrapper = styled.div`
    display: flex;
    padding: 10px
`

export const ViewMoreWrapper = styled.span`
    font-size: 15px;
    font-family: 'Poppins';
    font-weight: 320;
    color: #f49001;
    cursor: pointer;
    display: flex;
    justify-content: content;
`

export const FooterWrapper = styled.footer`
    background-color: #f49001;
    color: #ffffff;
    display: flex;
    justify-content: center; 
    align-items: center; 
    text-align: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
`;

export const BestSellerWrapper = styled(Row)`
    width: 1625px;
    padding-bottom: 50px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap; 
    justify-content: flex-start; 
`