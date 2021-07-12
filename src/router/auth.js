import router from './index.js'
import {getToken,deleteToken,deleteUserName} from '@/utils/cookie.js'
import store from '@/store/index.js'

router.beforeEach((to,from,next)=>{
    //是否登录 cookie token
    if(getToken()){//已登录
      //清空所有的登录状态
      if(to.path=='./login'){
          store.dispatch('app/exit')
          next()
      }else{
          if(store.getters['auth/asyncRoutes'].length==0){
            //请求接口获取当前用户的权限 生成动态路由
            store.dispatch('auth/getRoles').then(roles=>{
              store.dispatch('auth/createAsyncRoutes',roles).then(res=>{
                router.options.routes = store.getters['auth/allRoutes']
                //注册路由
                store.getters['auth/asyncRoutes'].map(item=>{
                  router.addRoute(item)
                  })
                  next({...to,replace:true})
              })
          })
        }else{
          next()
        }
      }
     
    }else{ //未登录
      if(to.path == '/login'){
        next()
      }else{
        next('/login')
      }
    }
  })


   //   const routes = [...defaultRoutes,...asyncRoutes]
    //   router.options.routes = routes  //路由表的等于现在这个数据
    //   //注册路由
    //   routes.map(item=>{
    //     //   router.addRoute(item)