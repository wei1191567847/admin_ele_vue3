import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/views/Layout/index.vue'
export const defaultRoutes = [
  {
    path: "/",
    redirect: "/home",
    name: '/Home',
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

];

export const asyncRoutes = [
   //用户
   {
    path:'/user',
    name:'User',  //用户
    component:Layout,
    show:true,
    meta:{
      name:'用户',
      iconName:'user',
      roles:['manger','salse']
    },
    children:[
      {
        path:'/userIndex',
        name:'UserIndex',
        component:()=> import('@/views/User/userIndex.vue'),
        meta:{
          name:'浏览用户',
          btns:['user.index']
        }
      },
      {
        path:'/useradd',
        name:'UserAdd',
        component:()=> import('@/views/User/userAdd.vue'),
        meta:{
          name:'添加用户',
          btns:['user.add']
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
      iconName:'category',
      roles:['salse']
    },
    children:[
      {
        path:'/categoryIndex',
        name:'CategoryIndex',
        component:()=> import('@/views/Category/categoryIndex.vue'),
        meta:{
          name:'浏览分类',
          btns:['category.index']
        }
      },
      {
        path:'/categoryAdd',
        name:'CategoryAdd',
        component:()=> import('@/views/Category/categoryAdd.vue'),
        meta:{
          name:'添加分类',
          btns:['category.add']
        }
      }
    ]
  },
]


const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes:defaultRoutes
});



export default router;
