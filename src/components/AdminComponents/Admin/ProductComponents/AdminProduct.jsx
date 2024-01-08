import React, { useCallback, useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { StyledButton, AddTextHeader, HeaderWrapper, StyledButtonWrapper, AdminProductWrapper } from './style'
import TableComponent from '../../../TableComponent/TableComponent'
import { Checkbox, Form, Modal } from 'antd'
import InputComponent from '../../../InputComponent/InputComponent'
import * as FoodService from '../../../../services/FoodService'
import * as message from '../../../Message/Message'
// import * as message from '../../../Message/Message';
import { useMutationHooks } from '../../../../hooks/useMutationHook'
// import { useQuery } from '@tanstack/react-query'


const AdminProduct = () => {

    const [allFoods, setAllFoods] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [stateFood, setStateFood] = useState({
        name: '',
        image: '',
        type: '',
        price: 0,
        rating: 0,
        description: '',
        countInStock: 0,
        discount: 0,
        isBestSeller: false
    })


    const mutationCreateFood = useMutationHooks(
        (data) => {
            const {
                name,
                image,
                type,
                price,
                rating,
                description,
                countInStock,
                discount,
                isBestSeller
            } = data
            const res = FoodService.createFood({
                name,
                image,
                type,
                price,
                rating,
                description,
                countInStock,
                discount,
                isBestSeller
            })
            return res
        }
    )

    const { data, isSuccess, isError } = mutationCreateFood
    
    const fetchAllProduct = async () => {
        const res = await FoodService.getAllFood()
        if (res?.status === 'OK') {
            setAllFoods(res?.data)
        }
        return res
    }

    console.log('allFoods', allFoods);

    // const { data: foods } = useQuery({
    //     queryKey: ['foods'],
    //     queryFn: fetchAllProduct,
    //     options: { retry: 3, retryDelay: 1000 }
    // })

    const handleOk = () => {
        handleCreateFood()
    }

    const handleCreateFood = () => {
        mutationCreateFood.mutate(stateFood)
        console.log('food', stateFood);
    }


    const handleCancel = useCallback(() => {
        setIsModalOpen(false)
        console.log(isSuccess);
        console.log('Cancel', isModalOpen);
    }, [isSuccess, isModalOpen]);

    const handleOnchange = (e) => {
        // console.log('e.target.value', e.target.name, e.target.value)
        setStateFood({
            ...stateFood,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (isSuccess && data?.status === 'OK') {
            message.success()
            handleCancel()
            console.log('Hooks');
            setStateFood({
                name: '',
                image: '',
                type: '',
                price: 0,
                rating: 0,
                description: '',
                countInStock: 0,
                discount: 0,
                isBestSeller: false
            })
        } else if (isError) {
            message.error()
            // fetchAllProduct()
        }
    }, [isSuccess, data?.status, isError, handleCancel])



    return (
        <AdminProductWrapper>
            <HeaderWrapper>
                <AddTextHeader> FOOD MANAGEMENT </AddTextHeader>
                <StyledButtonWrapper>
                    <StyledButton type="primary" onClick={() => setIsModalOpen(true)}>
                        <PlusOutlined style={{ fontSize: '30px' }} />
                        ADD FOOD
                    </StyledButton>
                </StyledButtonWrapper>
            </HeaderWrapper>
            <div>
                <TableComponent />
            </div>
            <div>
                <Modal title="New Food" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Form layout="vertical">
                        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the name!' }]}>
                            <InputComponent value={stateFood.name} onChange={handleOnchange} name="name" />
                        </Form.Item>
                        <Form.Item label="Image URL" name="image" rules={[{ required: true, message: 'Please input the image URL!' }]}>
                            <InputComponent value={stateFood.image} onChange={handleOnchange} name="image" />
                        </Form.Item>
                        <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please input the type!' }]}>
                            <InputComponent value={stateFood.type} onChange={handleOnchange} name="type" />
                        </Form.Item>
                        <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input the price!' }]}>
                            <InputComponent value={stateFood.price} onChange={handleOnchange} name="price" />
                        </Form.Item>
                        <Form.Item label="Rating" name="rating" rules={[{ required: true, message: 'Please input the rating!' }]}>
                            <InputComponent value={stateFood.rating} onChange={handleOnchange} name="rating" />
                        </Form.Item>
                        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input the description!' }]}>
                            <InputComponent value={stateFood.description} onChange={handleOnchange} name="description" />
                        </Form.Item>
                        <Form.Item label="Count In Stock" name="countInStock" rules={[{ required: true, message: 'Please input the count in stock!' }]}>
                            <InputComponent value={stateFood.countInStock} onChange={handleOnchange} name="countInStock" />
                        </Form.Item>
                        <Form.Item label="Discount" name="discount" rules={[{ required: true, message: 'Please input the discount!' }]}>
                            <InputComponent value={stateFood.discount} onChange={handleOnchange} name="discount" />
                        </Form.Item>
                        <Form.Item name="isBestSeller" valuePropName="checked">
                            <Checkbox value={stateFood.isBestSeller} name="isBestSeller" >Is Best Seller?</Checkbox >
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </AdminProductWrapper>
    )
}

export default AdminProduct
