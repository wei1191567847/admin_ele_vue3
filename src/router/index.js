import { createRouter, createWebHashHistory } from "vue-router";

import Layout from '@/views/Layout/index.vue'
const routes = [
  {
    path: "/",
    redirect: "/home",
    name: 'Home',
    show:false,
    meta:{
      name:'根路由'
    }
  },
  {
    path:'/Login',
    name:'Login',
    component:()=>import('../views/Login.vue'),
    show:false,
    meta:{
      name:'登录'
    }
  },
  //控制台
  {
    path:'/home',
    name:'Console',  //控制台
    component:Layout,
    show:true,
    redirect:'/index',
    meta:{
      name:'首页',
      iconName:'console'
    },
    children:[
      {
        path:'/index',
        name:'Index',
        component:()=> import('@/views/Console/index.vue'),
        meta:{
          name:'销售数据展示'
        }
      },
      {
        path:'/index1',
        name:'Index1',
        component:()=> import('@/views/Console/index1.vue'),
        meta:{
          name:'销售TOP10'
        }
      }
    ]
  },
  //用户
  {
    path:'/user',
    name:'User',  //用户
    component:Layout,
    show:true,
    meta:{
      name:'用户'
    },
    children:[
      {
        path:'/userIndex',
        name:'UserIndex',
        component:()=> import('@/views/User/userIndex.vue'),
        meta:{
          name:'浏览用户'
        }
      },
      {
        path:'/useradd',
        name:'UserAdd',
        component:()=> import('@/views/User/userAdd.vue'),
        meta:{
          name:'添加用户'
        }
      }
    ]
  },
  //分类
  {
    path:'/category',
    name:'Category',  
    component:Layout,
    show:true,
    meta:{
      name:'分类',
      iconName:'category'
    },
    children:[
      {
        path:'/categoryIndex',
        name:'CategoryIndex',
        component:()=> import('@/views/Category/categoryIndex.vue'),
        meta:{
          name:'浏览分类'
        }
      },
      {
        path:'/categoryAdd',
        name:'CategoryAdd',
        component:()=> import('@/views/Category/categoryAdd.vue'),
        meta:{
          name:'添加分类'
        }
      }
    ]
  },

];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to,from,next)=>{
  next()
  // if(true){ //未登录
  //   next('/login')
  // }else{  //登录
  //   next()
  // }
})

export default router;
