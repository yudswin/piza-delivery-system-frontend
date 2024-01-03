import styled from 'styled-components'
import background from '../../assets/backgroundCategory.png';
import { Button, Upload } from 'antd'

export const BodyWrapper = styled.div`
    background-image: url(${background});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 95vh;
    position: relative;
    padding: 30px;
`

export const HeaderTextWrapper = styled.div`
    font-family: Poppins;
    font-size: 40px;
    font-weight: 600;
    color: #fff;
`

export const CardWrapper = styled.div`
    width: 700px;
    background: #fff;
    padding: 15px;
    border-radius: 6px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: flex-start;
    box-shadow: 0 8px 16px rgb(0 0 0 / 8%);
    padding: 30px 0 30px;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 10px 120px 10px 30px;
    gap: 30px;
`

export const FormTextWrapper = styled.div`
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    color: #f49001;
    padding-left: 30px;
`

export const StyledButton = styled(Button)`
    background-color: #f49001;
    color: #efefef;
    width: 20%;
    border-radius: 8px;
    border-color: #f49001;
    font-family: Poppins;
    font-size: 13px;
    display: flex;
    justify-content: center; 
    align-items: center;
    
    &:hover {
        background-color: #fff !important; 
        color: #f49001 !important; 
        border-color: #f49001 !important;
    }
`;

export const StyledUpload = styled(Upload)`
    align-items: center;
    & .ant-upload-list-item-info {
        display: none
    }
}
`
