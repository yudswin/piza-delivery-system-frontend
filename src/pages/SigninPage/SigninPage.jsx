import React, { useEffect } from 'react'
import { useState } from 'react'
import { AuthCard, AuthWrapper, EndingWrapper, FormWrapper, HeadingWrapper, ErrorMessage, StyledButton, StyledLink } from './style'
import Logo from '../../assets/Logo.png';
import InputForm from '../../components/InputForm/InputForm';
import * as UserService from '../../services/UserService';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as message from '../../components/Message/Message';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slides/userSlide';

const SigninPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    )

    const { data, isSuccess, isError } = mutation

    useEffect(() => {
        if (isSuccess) {
            if (location?.state) {
                navigate(location?.state)
            } else {
                navigate('/')
            }
            message.success()
            localStorage.setItem('accessToken', JSON.stringify(data?.accessToken))
            console.log('data', data)
            if (data?.accessToken) {
                const decoded = jwtDecode(data?.accessToken);
                console.log('decoded', decoded)
                if (decoded?.id) {
                    handleGetDetailUser(decoded?.id, data?.accessToken);
                }
            }
            localStorage.setItem('refreshToken', JSON.stringify(data?.refreshToken))
        } else if (isError) {
            message.error("Login failed")
        }
    }, [isSuccess, isError])

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailUser(id, token)
        dispatch(updateUser({ ...res?.data, accessToken: token }))
        // console.log('res', res)
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleSignIn = (value) => {

        mutation.mutate({
            email,
            password
        })
    }


    return (
        <AuthWrapper>
            <AuthCard>
                <img src={Logo} alt="Logo" width="300" height="auto" onClick={() => navigate('/')}/>
                <HeadingWrapper>Login to your account</HeadingWrapper>
                <FormWrapper>
                    <InputForm placeholder="*Email address" value={email} onChange={handleOnchangeEmail} />
                    <InputForm placeholder="*Password" type={password ? "password" : "text"} value={password} onChange={handleOnchangePassword} />
                </FormWrapper>
                {data?.status === 'ERR' && <ErrorMessage>{data?.message}</ErrorMessage>}
                <StyledButton
                    onClick={handleSignIn}
                    disabled={!(email && password)}>
                    Login
                </StyledButton>
                <EndingWrapper>
                    <span>
                        Did not have an account?
                        <StyledLink to="/signup"> Create an account</StyledLink>
                    </span>
                    <span>
                        <StyledLink to="/signup">Forgot password</StyledLink>
                    </span>
                </EndingWrapper>
            </AuthCard>
        </AuthWrapper>
    )
}

export default SigninPage