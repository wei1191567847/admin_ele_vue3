import cookie from 'cookie_js'

const token_key = 'token'
const username_key = 'username'
//token
export const getToken = ()=>{
    return cookie.get(token_key)
}
export const setToken = (value)=>{
    cookie.set(token_key,value)
}
export const deleteToken = ()=>{
    cookie.remove(token_key)
}
//用户

export const getUserName = ()=>{
    return cookie.get(username_key)
}

export const setUserName = (value)=>{
    cookie.set(username_key,value)
}

export const deleteUserName = ()=>{
    cookie.remove(username_key)
}