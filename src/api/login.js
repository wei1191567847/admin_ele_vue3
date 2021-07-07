import axios from '@/utils/myAxios.js'


export const getCode = async (data)=>{ 
    const res = await axios.request({
        method:"post",
        url:"/api/getSms/",
        data
    })
    console.log('code:',res.data.message)
    return res.data.message
}

export const login = async (data)=>{
    const res = await axios.request({
        method:"post",
        url:"/api/login/",
        data
    })
    return res
}

export const register = async (data)=>{
    const res = await axios.request({
        method:"post",
        url:"/api/register/",
        data
    })
    console.log(res)
    return res
}