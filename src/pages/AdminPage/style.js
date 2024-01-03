import styled from "styled-components"
import { Menu } from 'antd';
import background from '../../assets/backgroundCategory.png';

export const StyledSideBar = styled(Menu)`
    height: 100vh;
    padding: 10px 10px;
    &.ant-menu {
        background-image: url(${background});
        background-size: cover;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;

        .ant-menu-item-active && .ant-menu-item-hover {
            border-bottom-color: transparent;
        }

        .ant-menu-item-selected {
            background-color: #fff;
        }
    }
`

export const WrapperSideBar = styled.div`
    width: 300px;
    height: 100vh;
    box-shadow: 0 8px 16px rgb(0 0 0 / 8%);
`

export const WrapperContent = styled.div`
    padding: 30px;
`
