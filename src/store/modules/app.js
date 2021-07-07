import {login} from '@/api/login.js'
import {setToken} from '@/utils/localStorage.js'

const state = ()=>{
    return{
        //全局属性
        islogin:false,
        token:'',
        isCollapse:false,
        user:{}
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
    SET_USER:(state,userObj)=>{
        state.user = userObj
    }
}

const actions = {
    //异步请求
    login:({commit},requestData)=>{
        return new Promise((resolve,reject)=>{
            login(requestData).then(res=>{
                let result = res.data.data
                console.log(result)
                //设置token
                commit('SET_TOKEN',result.token)
                setToken('token',result.token)

                //设置islogin
                commit('SET_LOGIN',true)

                //设置用户数据
                commit('SET_USER',result)
            }).catch(err=>{

            })
        })
    }
}


export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions,
}