import { Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { CartWrapper, ItemWrappper, TextWrapper, UserWrapper, WrapperHeader } from './style'
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import userLogo from '../../assets/user.png'
import login from '../../assets/login.png'
import logout from '../../assets/logout.png';
import Logo from '../../assets/Logo.png'
import { SearchContainer } from '../HeaderComponents/style'

const AdminHeader = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [userName, setUserName] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()


    const handleNavigateLogin = () => {
        navigate('/signin')
    }

    const handleNavigateRegister = () => {
        navigate('/signup')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() => {
        console.log('isloading', loading)
        setLoading(true)
        setUserName(user?.name)
        setLoading(false)
    }, [user?.name, user?.avatar])

    return (
        <WrapperHeader>
            <Col span={5}>
                <img src={Logo} alt="Logo" width="200" height="auto" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
            </Col>
            <Col span={10}>
                <SearchContainer
                    placeholder="Admin Header."
                    size="large"
                />
            </Col>
            <Col span={4} >
                <UserWrapper>
                    {user?.accessToken ? (
                        <ItemWrappper>
                            <img src={userLogo} alt="user" width='23px' />
                            <CartWrapper style={{ cursor: 'pointer' }}>{userName?.length ? userName : user?.email}</CartWrapper>
                            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '30px', cursor: 'pointer' }} onClick={() => handleLogout()}>
                                <img src={logout} alt="logout" width="23" height="auto" />
                                <CartWrapper >Logout</CartWrapper>
                            </div>
                        </ItemWrappper>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <ItemWrappper>
                                <img src={login} alt="login" />
                                <TextWrapper onClick={handleNavigateRegister} style={{ cursor: 'pointer' }}>Register</TextWrapper>
                            </ItemWrappper>
                            <ItemWrappper>
                                <img src={userLogo} alt="user" />
                                <TextWrapper onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>Login</TextWrapper>
                            </ItemWrappper>
                        </div>
                    )}
                </UserWrapper>
            </Col>
        </WrapperHeader>
    )
}

export default AdminHeader