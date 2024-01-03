import styled from 'styled-components';
import { Input } from 'antd';

export const InputContainer = styled(Input)`
    font-family: Poppins;
    font-size: 13px;
    .ant-input {
        font-family: Poppins;
        color: #f49001;
    }
    &:hover, &:focus, &:active{
        outline: none;
        border-color: #d9d9d9;
    }
`
