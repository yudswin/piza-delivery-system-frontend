import styled from 'styled-components';
import { Row } from 'antd';


export const NavWrapper = styled.div`
    display: flex;
    padding: 10px 100px;
    justify-content: space-between;
`

export const NavTitle = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 100px 0px 100px;
    gap: 500px;
`

export const HeadingTextWrapper = styled.span`
    font-size: 30px;
    font-family: 'Poppins';
    font-weight: 700;
    color: #f49001;
`

export const WrapperHeader = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 16px;
    gap: 24px;
    flex-wrap: nowrap;
`;

export const WrapperBody = styled(Row)`
    width: 1350px;
    padding: 0px 50px 50px 100px;
    display: flex;
    gap: 24px;
    flex-wrap: wrap; 
    justify-content: flex-start; 
`