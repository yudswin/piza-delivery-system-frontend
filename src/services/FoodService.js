import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllFood = async () => { 
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/food/getAll`)
    return res.data
}


export const getFoodType = async (type, page, limit) => {
    if (type) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/food/getAll?filter=type&filter=${type}&limit=${limit}&page=${page}`)
        return res.data
    }
}

export const createFood = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/food/create`, data)
    return res.data
}

export const getDetailsFood = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/food/getDetails/${id}`)
    return res.data
}

export const updateFood = async (id, accessToken, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/food/update/${id}`, data, {
        headers: {
            token: `Bearer ${accessToken}`,
        }
    })
    return res.data
}

export const deleteFood = async (id, accessToken) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/food/delete/${id}`, {
        headers: {
            token: `Bearer ${accessToken}`,
        }
    })
    return res.data
}

export const deleteManyFood = async (data, accessToken,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/food/deleteMany`, data, {
        headers: {
            token: `Bearer ${accessToken}`,
        }
    })
    return res.data
}

export const getAllTypeFood = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/food/getAllType`)
    return res.data
}

export const getAllBestFood = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/food/getAllBest`)
    return res.data
}