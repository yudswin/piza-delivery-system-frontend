
import { Menu } from 'antd'
import { StyledSideBar, WrapperContent, WrapperSideBar } from './style'
import { InboxOutlined, TagsOutlined, UserOutlined } from '@ant-design/icons'
import { useState } from 'react';
import AdminUser from '../../components/AdminComponents/Admin/UsersComponents/AdminUser';
import AdminProduct from '../../components/AdminComponents/Admin/ProductComponents/AdminProduct';
import OrderAdmin from '../../components/AdminComponents/Admin/OrderComponents/AdminOrder';
import AdminHeader from '../../components/AdminComponents/AdminHeader';


const AdminPage = () => {

    const [selectedKey, setSelectedKey] = useState('');

    const handleOnClick = ({ key }) => {
        setSelectedKey(key)
    }

    const renderPage = (key) => {
        switch (key) {
            case 'users':
                return (
                    <AdminUser />
                )
            case 'products':
                return (
                    <AdminProduct />
                )
            case 'orders':
                return (
                    <OrderAdmin />
                )
            default:
                return (
                    <AdminUser />
                )
        }
    }

    return (
        < >
            <AdminHeader />
            <div style={{ backgroundColor: '#efefef', display: 'flex', flexDirection: 'row' }}>
                <WrapperSideBar>
                    <StyledSideBar selectedKeys={[selectedKey]} style={{ lineHeight: "20px" }}>
                        <Menu.Item key="users" onClick={handleOnClick}>
                            <div style={{ color: selectedKey === 'users' ? '#f49001' : '#fff', gap: '10px' }}>
                                <UserOutlined style={{ fontSize: '20px' }} />
                                <span>Users list</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="products" onClick={handleOnClick}>
                            <div style={{ color: selectedKey === 'products' ? '#f49001' : '#fff', gap: '10px' }}>
                                <InboxOutlined style={{ fontSize: '20px' }} />
                                <span>Products list</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="orders" onClick={handleOnClick}>
                            <div style={{ color: selectedKey === 'orders' ? '#f49001' : '#fff', gap: '10px' }}>
                                <TagsOutlined style={{ fontSize: '20px' }} />
                                <span>Orders list</span>
                            </div>
                        </Menu.Item>
                    </StyledSideBar>
                </WrapperSideBar>
                <WrapperContent>
                    {renderPage(selectedKey)}
                </WrapperContent>
            </div>
        </>
    )
}

export default AdminPage