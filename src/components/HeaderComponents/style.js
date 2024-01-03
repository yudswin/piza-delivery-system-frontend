import { Input, Row } from "antd";
import styled from "styled-components";


export const WrapperHeader = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 16px;
    background-color: #fff;
    gap: 24px;
    flex-wrap: nowrap;
`;

export const TextWrapper = styled.span`
    font-size: 15px;
    font-family: Poppins;
    font-style: bold;
    color: #f49001;
    padding-left: 10px;
    
`

export const AccountContainer = styled.div`
    display: grid;
    flex-direction: row;
    flex-wrap: nowrap;
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

export const SearchContainer = styled(Input.Search)`
    .ant-input {
        font-family: Poppins;
    }

    &:where(.css-dev-only-do-not-override-6j9yrn).ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button:not(.ant-btn-primary):hover {
        color: #f49001;
        border-color: #f49001;
    }

    &:where(.css-dev-only-do-not-override-6j9yrn).ant-input-search .ant-input:hover, :where(.css-dev-only-do-not-override-6j9yrn).ant-input-search .ant-input:focus {
        border-color: #f49001;
        box-shadow: none;
    }
`

