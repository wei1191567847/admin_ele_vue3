import axios from 'axios'

export const getCode = async ()=>{
    //本地数据
    const data = await axios.get('/mock/login/code.json')
    return data.data
}

export const login = async (params)=>{
    const data = await axios.get('/mock/login/user.json')
    return data.data
}

export const register = async (params)=>{
    const data = await axios.get('/mock/login/user.json')
    return data.data
}