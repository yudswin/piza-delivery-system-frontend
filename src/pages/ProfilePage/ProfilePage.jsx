import { useEffect, useState } from 'react'
import { BodyWrapper, CardWrapper, FormTextWrapper, FormWrapper, HeaderTextWrapper, StyledButton, StyledUpload } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { useDispatch, useSelector } from 'react-redux'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as message from '../../components/Message/Message';
import { updateUser } from '../../redux/slides/userSlide'
import { Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { getBase64 } from '../../utils'

const ProfilePage = () => {

    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')

    const mutation = useMutationHooks(
        (data) => {
            const { id, accessToken, ...rests } = data
            UserService.updateUser(id, rests, accessToken)
        }
    )


    const dispatch = useDispatch()
    const { data, isSuccess, isError } = mutation

    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)
    }, [user])

    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleGetDetailsUser(user?.id, user?.accessToken)
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailUser(id, token)
        dispatch(updateUser({ ...res?.data, accessToken: token }))
        // console.log('res', res)
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangeName = (value) => {
        setName(value)
    }

    const handleOnchangePhone = (value) => {
        setPhone(value)
    }

    const handleOnchangeAddress = (value) => {
        setAddress(value)
    }

    const handleOnchangeAvatar = async ({fileList}) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj );
        }
        setAvatar(file.preview)
    }

    const handleUpdate = () => {
        mutation.mutate({ id: user?.id, email, name, phone, address, avatar, accessToken: user?.accessToken })
    }

    


    return (
        <BodyWrapper>
            <div style={{ alignContent: 'center' }}>
                <HeaderTextWrapper> USER INFORMATION </HeaderTextWrapper>
                <CardWrapper>
                    <FormWrapper>
                        <FormTextWrapper>Name</FormTextWrapper>
                        <InputForm placeholder="new name" value={name} onChange={handleOnchangeName} />
                        <StyledButton
                            onClick={handleUpdate}
                        // disabled={!(email && password)}
                        > Update </StyledButton>
                    </FormWrapper>
                    <FormWrapper>
                        <FormTextWrapper>Email</FormTextWrapper>
                        <InputForm placeholder="new email address" value={email} onChange={handleOnchangeEmail} />
                        <StyledButton
                            onClick={handleUpdate}
                        // disabled={!(email && password)}
                        > Update </StyledButton>
                    </FormWrapper>
                    <FormWrapper>
                        <FormTextWrapper>Phone</FormTextWrapper>
                        <InputForm placeholder="new phone number" value={phone} onChange={handleOnchangePhone} />
                        <StyledButton
                            onClick={handleUpdate}
                        // disabled={!(email && password)}
                        > Update </StyledButton>
                    </FormWrapper>
                    <FormWrapper>
                        <FormTextWrapper>Address</FormTextWrapper>
                        <InputForm placeholder="new address" value={address} onChange={handleOnchangeAddress} />
                        <StyledButton
                            onClick={handleUpdate}
                        // disabled={!(email && password)}
                        > Update </StyledButton>
                    </FormWrapper>
                    <FormWrapper>
                        <FormTextWrapper>Avatar</FormTextWrapper>
                        <StyledUpload 
                            onChange={handleOnchangeAvatar} 
                            maxCount={1} 
                            >
                            <Button style={{ width: '263px'}} icon={<UploadOutlined />}>Select File</Button>
                        </StyledUpload>
                        <StyledButton
                            onClick={handleUpdate}
                        // disabled={!(email && password)}
                        > Update </StyledButton>
                    </FormWrapper>
                </CardWrapper>
            </div>
        </BodyWrapper>
    )
}

export default ProfilePage