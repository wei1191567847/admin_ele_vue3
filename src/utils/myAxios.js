import axios from 'axios'
import { ElMessage } from 'element-plus'
import {getToken,getUserName} from '@/utils/cookie.js'


//添加请求拦截器 1.vuex 2.localStorage
const unUseToken = ['/api/login/','/api/register/','/api/getSms/'] 
axios.interceptors.request.use(function(config){
if(!unUseToken.includes(config.url)){
    config.headers.Tokey = getToken()
    config.headers.UserName = getUserName()
}
    
    
    //在发送请求之前做些什么
    return config;
},function (error){
    //对请求错误做些什么
    return Promise.reject(error);
});

//添加响应拦截
axios.interceptors.response.use((res)=>{
    //服务器正常响应数据，但是数据不符合预期
    //对响应数据做点什么
    if(res.data.resCode !== 0){
        ElMessage({
            showClose: true,
            message: res.data.message,
            type: 'warning'
        })
    }
    return res;
}, (error)=>{
    //服务器报错
    //对响应错误做点什么
    return Promise.reject(error);
});

export default axios