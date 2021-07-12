import {login} from '@/api/login.js'
import {getToken,setToken,getUserName,setUserName,deleteToken,deleteUserName} from '@/utils/cookie.js'

const state = ()=>{
    return{
        //全局属性
        islogin:false,
        token:getToken() || '',   //运算短路
        isCollapse:false,
        username:getUserName() || ''
    }
}
const getters = {
    isCollapse: state => state.isCollapse,
    token:state => state.token
} 

const mutations = {
    SET_COLLAPSE:(state,paylod)=>{
        state.isCollapse = !state.isCollapse
    },
    SET_TOKEN:(state,token)=>{
        state.token = token
    },
    SET_LOGIN:(state,flag)=>{
        state.islogin = flag
    },
    SET_USER:(state,username)=>{
        state.user = username
    }
}

const actions = {
    //异步请求
    login:({commit},requestData)=>{
        return new Promise((resolve,reject)=>{
             login(requestData).then(res=>{
                  let result=res.data.data
                  console.log(res)
                  //设置token
                  commit('SET_TOKEN',result.token)
                  commit('SET_USER',result.username)
                  setToken(result.token)
                  setUserName(result.username)
                  //islogin
                  commit('SET_LOGIN',true)
                  //设置用户数据
                  commit('SET_USER',result)
                  resolve()
             }).catch(err=>{


             })
        })
    },
    exit:({commit})=>{
        commit('SET_TOKEN','')
        commit('SET_USER','')
        deleteToken()
        deleteUserName()
    }
}


export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions,
}