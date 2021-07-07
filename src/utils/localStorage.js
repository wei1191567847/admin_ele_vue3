export const setToken = (key,value)=>{
    localStorage.setItem(key,value)
}
export const getToken = (key)=>{
    return localStorage.getItem(key)
}