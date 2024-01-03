// image
import Logo from '../../assets/Logo.png';
import userLogo from '../../assets/user.png';
import cart from '../../assets/cart.png';
import login from '../../assets/login.png';
import logout from '../../assets/logout.png';

import React, { Fragment, useEffect, useState } from "react";
import { Col } from 'antd';
import {
    WrapperHeader,
    AccountContainer,
    ItemWrappper,
    SearchContainer,
    TextWrapper,
    CartWrapper
} from "./style";
import Headroom from 'react-headroom';
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import Loading from '../LoadingComponent/Loading';


const Header = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        // if (location.pathname === '/admin') {
        //     navigate('/');
        // }
        setLoading(false)
    };
    const handleNavigateLogin = () => {
        navigate('/signin')
    }

    const handleNavigateRegister = () => {
        navigate('/signup')
    }

    useEffect(() => {
        console.log('isloading', loading)
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    }, [user?.name, user?.avatar])

    return (
        <div className="header-component">
            <Headroom>
                <WrapperHeader>
                    <Col span={5}>
                        <img src={Logo} alt="Logo" width="200" height="auto" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    </Col>
                    <Col span={10}>
                        <SearchContainer
                            placeholder="Search for foods, drinks, etc."
                            size="large"
                        />
                    </Col>
                    <Col span={4} style={{ display: 'flex', gap: '50px' }}>
                        <Loading isLoading={loading}>
                            <AccountContainer>
                                {user?.accessToken ? (
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                                        <ItemWrappper>
                                            {user?.userAvatar ? (
                                                <img src={userAvatar} alt="avatar" width='30px' height='50px' style={{ borderRadius: '50%' }} />
                                            ) : (
                                                <img src={userLogo} alt="user" width='25px' />
                                            )}
                                            <CartWrapper onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>{user?.name.length ? userName : user?.email}</CartWrapper>
                                        </ItemWrappper>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={logout} alt="logout" width="23" height="auto" />
                                            <CartWrapper onClick={() => handleLogout()} style={{ cursor: 'pointer' }}>Logout</CartWrapper>
                                        </div>
                                        {user?.isAdmin ? (
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <CartWrapper onClick={() => navigate('/admin')} style={{ cursor: 'pointer' }}>Admin</CartWrapper>
                                            </div>
                                        ) : null}
                                    </div>

                                ) : (
                                    <>
                                        <ItemWrappper>
                                            <img src={login} alt="login" />
                                            <TextWrapper onClick={handleNavigateRegister} style={{ cursor: 'pointer' }}>Register</TextWrapper>
                                        </ItemWrappper>
                                        <ItemWrappper>
                                            <img src={userLogo} alt="user" />
                                            <TextWrapper onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>Login</TextWrapper>
                                        </ItemWrappper>
                                    </>
                                )}
                            </AccountContainer>
                        </Loading>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={cart} alt="cart" width="25" height="auto" />
                            <CartWrapper onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>Cart</CartWrapper>
                        </div>
                    </Col>
                </WrapperHeader>
            </Headroom>
        </div >
    )

}

export default Header;
