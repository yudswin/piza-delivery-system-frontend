import styled from 'styled-components'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import background from '../../assets/backgroundCategory.png';

export const AuthWrapper = styled.div`
    background-image: url(${background});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative;
`

export const AuthCard = styled.div`
    width: 360px;
    background: #fff;
    padding: 15px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 8px 16px rgb(0 0 0 / 8%);
`

export const HeadingWrapper = styled.div`
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    color: #f49001;
    padding: 25px 0;
`

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 30 px 0 5px;
`


export const StyledButton = styled(Button)`
    background-color: #f49001;
    color: #efefef;
    width: 50%;
    border-radius: 8px;
    border-color: #f49001;
    font-family: Poppins;
    font-size: 15px;
    display: flex;
    justify-content: center; 
    align-items: center;
    margin: 15px 0 0 0;

    &:hover {
        background-color: #fff !important; 
        color: #f49001 !important; 
        border-color: #f49001 !important;
    }
`;

export const ForgotWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: Poppins;
    font-size: 14px;
    color: #f49001;
    padding-bottom: 20px;
`

export const EndingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    font-family: Poppins;
    font-size: 10px;
    color: #f49001;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #a76200;
    font-size: 11px;

    &:active {
        color: #a76200;
    }
`

export const ErrorMessage = styled.span`
    padding: 5px 0 10px ;
    color: ab703a;
    font-weight: 400;   
    font-family: Poppins;
`;