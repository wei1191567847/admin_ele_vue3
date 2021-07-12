import {getRoles} from '@/api/login.js'
import {defaultRoutes,asyncRoutes} from '@/router/index.js'
const state = ()=>{
    return{
        allRoutes:[],   //所有的路由
        asyncRoutes:[],  //根据权限接口动态匹配的路由
        btns:[]
    }
}
const getters = {
    allRoutes:state => state.allRoutes,
    asyncRoutes:state => state.asyncRoutes
} 

const mutations = {
    SET_ROUTES:(state,routes)=>{
        state.asyncRoutes = routes
        state.allRoutes = [...defaultRoutes,...routes]
    } ,
    SET_BTNS:(state,btns) => state.btns = btns
}

const actions = {
    //请求后台的权限接口
    getRoles:({commit})=>{
        return new Promise((resolve,reject)=>{
            getRoles().then(res=>{
                
                const data = {
                    roles:['salse'],
                    btns:['user.index','user.delete','category.add']
                }   
                resolve(data)
            })
        })
    },
    createAsyncRoutes:({commit},roles)=>{
        return new Promise((resolve,reject)=>{
            const btns_ = checkBtns(roles.btns)
            roles.btns = btns_
            commit('SET_BTNS',btns_)

            let tmpRoutes = []

            if(roles.roles.includes('admin')){
                tmpRoutes = asyncRoutes
            }else{
                //根据权限和动态路由匹配
                tmpRoutes = checkAsyncRouters(asyncRoutes,roles)
            }
            
            commit('SET_ROUTES',tmpRoutes)
            resolve()
        })
    }
}
const isHaveRole = (rolesArr,roles)=>{
    let flag = false;
    for(let i=0; i < roles.length; i++){
        if(rolesArr.includes(roles[i])){
            flag = true;
            break;
        }
    }
    return flag 
}
const checkAsyncRouters = (routers,roles)=>{

    const arr =  routers.filter(item=>{
        //一级导航路由
        if(isHaveRole(item.meta.roles,roles.roles)){
            if(item.children && item.children.length>0){
                //二级导航路由
                item.children = item.children.filter(item_=>{
                    if(isHaveRole(item_.meta.btns,roles.btns)){
                        return true
                    }
                })
            }
            return true 
        }
    })
    return arr
}

const checkBtns = (arr,flag_arr=['user','category'])=>{
    let _arr = []
    arr.map(item=>{
        flag_arr.map(flag=>{
            if(item.split('.')[0]==flag){
                if(!_arr.includes(`${flag}.index`)){
                    _arr.push(`${flag}.index`)
                }
            }
        })
        _arr.push(item)
    })
        
    return _arr
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions,
}