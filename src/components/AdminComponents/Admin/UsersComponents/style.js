import { Button } from 'antd'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
    height: 150px;
    width: 150px;
    border-radius: 6px;
    border-style: dashed;
    border-color: #a9701e;
    background-color: #f6a32c;

    &:hover &&  {
        background-color: #a9701e;
        .ant-btn-primary {
            background-color: #a9701e;
        }
    }
`

export const AddTextHeader = styled.div`
    font-size: 50px;
    font-family: 'Poppins';
    color: #f49001;
`

export const HeaderWrapper = styled.div`
    display: flex;
    width: 75vw;
    gap: 10px;
    flex-direction: column;
    align-items: start;
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    font-size: 30px;
    font-family: 
    color: #a9701e; 
    
`

export const AdminUsersWrapper = styled.div`
gap: 20px;
    display: flex;    
    flex-direction: column;
`