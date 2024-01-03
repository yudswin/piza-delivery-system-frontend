import React, { useEffect } from 'react'
import { AuthCard, AuthWrapper, EndingWrapper, FormWrapper, HeadingWrapper, StyledButton, StyledLink } from './style'
import Logo from '../../assets/Logo.png';
import InputForm from '../../components/InputForm/InputForm';
import { useState } from 'react'
import * as UserService from '../../services/UserService';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { ErrorMessage } from '../SigninPage/style';
import * as message from '../../components/Message/Message';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassowrd] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const mutation = useMutationHooks(
        data => UserService.signupUser(data)
    )

    const { data, isError, isSuccess } = mutation

    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleNavegateToSignin()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassowrd(value)
    }

    const handleOnchangeName = (value) => {
        setName(value)
    }

    const handleOnchangePhone = (value) => {
        setPhoneNumber(value)
    }
    
    const handleNavegateToSignin = () => {
        navigate('/signin')
    }

    const handleSignUp = () => {
        mutation.mutate({
            name,
        email,
        password,
        confirmPassword,
        phoneNumber
        })
        console.log('signup', email, password, confirmPassword)
    }



    return (
        <AuthWrapper>
            <AuthCard>
                <img src={Logo} alt="Logo" width="300" height="auto" onClick={() => navigate('/')}/>
                <HeadingWrapper>Register new account</HeadingWrapper>
                <FormWrapper>
                    <InputForm placeholder="*Name" value={name} onChange={handleOnchangeName} />
                    <InputForm placeholder="*Email address" value={email} onChange={handleOnchangeEmail} />
                    <InputForm placeholder="*Password" type={password ? "password" : "text"} value={password} onChange={handleOnchangePassword} />
                    <InputForm placeholder="*Re-enter Password" type={confirmPassword ? "password" : "text"} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
                    <InputForm placeholder="*Phone number" value={phoneNumber} onChange={handleOnchangePhone} />
                </FormWrapper>
                {data?.status === 'ERR' && <ErrorMessage>{data?.message}</ErrorMessage>}
                <StyledButton
                    onClick={handleSignUp}
                    disabled={!(email && password && confirmPassword)}
                >Register</StyledButton>
                <EndingWrapper>
                    <span>
                        Did not have an account?
                        <StyledLink to="/signin"> Login</StyledLink>
                    </span>
                </EndingWrapper>
            </AuthCard>
        </AuthWrapper>
    )
}

export default SignupPage