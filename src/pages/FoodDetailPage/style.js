import styled from 'styled-components';
import { Row } from 'antd';

export const WrapperHeader = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 26px 0 10px 165px;
    gap: 24px;
    flex-wrap: nowrap;
`;

export const WrapperBody = styled.div`
    display: grid;
    height: 700px;
    padding: 10px 0 50px;
    grid-template-columns: 1fr 1fr; // Creates two equally sized columns
    gap: 24px;
    flex-wrap: wrap; 
    justify-content: flex-start; 
`

export const LeftSide = styled.div`
    // Styles for the left side
`

export const RightSide = styled.div`
    // Styles for the right side
`

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

export const TitleWrapper = styled.div`
    font-size: 50px;
    font-family: 'Poppins';
    font-weight: 'bold';
    color: #f49001;
    padding-right: 50px;   
`

export const SmallTitleWrapper = styled.div`
    font-size: 30px;
    font-family: 'Poppins';
    font-weight: 'bold';
    color: #a76200;
    padding-top: 50px;
`
export const DescriptionWrapper = styled.div`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    text-align: justify;
    color: #a76200;
    padding: 20px 0px;
`

