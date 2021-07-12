<template>
    <div id="nav-wrap">
        <h1 class="logo">
            <img src="../../../assets/img/logo.png">
        </h1>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color='transparent'
            text-color='#fff'
            active-text-color='maroon'
            :unique-opened='true'  
            :router='true'
            ref='nav'
            :collapse='isCollapse'
            

        >
        <template  v-for='(menu,index) in routers' >
            <el-submenu :index="`${index}`" v-if='menu.show' :key='menu.name' :popper-append-to-body='false'>
                <template #title>
                            <svg-icon :iconName='menu.meta.iconName'/>
                        <span>{{menu.meta.name}}</span>
                    </template>
                    <template v-if='menu.children && menu.children.length'>
                        <el-menu-item :index='sub_menu.path' v-for="sub_menu in menu.children" :key='sub_menu.name'>{{sub_menu.meta.name}}</el-menu-item>
                    </template>  
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>

import {onMounted, reactive ,ref } from 'vue'
import {useRouter } from 'vue-router'
import {isCollapseMenu} from '@/hooks/vuex/isCollapseMenu.js'

export default {
    setup(){
        const nav = ref(null)

        const {isCollapse} = isCollapseMenu()

        const routers = reactive(useRouter().options.routes)
        onMounted(()=>{
            //默认选中第一个菜单
            //console.log(nav.value.open)
            
        })
        return{
            routers,nav,isCollapse
        }  
    }
}
</script>

<style lang='scss' scoped>
#nav-wrap{
    position:fixed;
    top:0px;
    left:0px;
    width:$navWidth;
    background-color:rgba(100, 102, 104, 0.288);
    height:100vh;
    overflow: hidden;
    @inClude webkit(transition, all .5s ease 0s);
    .logo{
        padding-top:20px;
        top:20px;
        text-align:center;
        img{
            width:90px;
            @inClude webkit(transition, all .5s ease 0s);
        }
    }
}
.close{
    #nav-wrap{
        width:$navMinWidth;
        img{
            width:30px;
        }
    }
}
.open{
    #nav-wrap{
        width:$navWidth;
        img{
            width:90px;
        }
    }
}
</style>