<template>
    <div id="login">
        <div class="login-wrap">
            <!--登录注册的切换-->
            <ul class="menu-tab" @click='changeMenuTab'>
                <li class='{current:menu.current}' v-for='menu in menuTab' :key='menu.text'>{{menu.text}}</li>
                
            </ul>
            <!--form 开始-->

            <!--form 结束-->
        </div>
            
    </div>
</template>

<script>
import {reactive} from 'vue'
    export default {
        setup(props,cxt){


            //data
            const menuTab = reactive([
                {
                    text:"登录",
                    current:true
                },
                {
                    text:'注册',
                    current:false
                }
            ])
    //methods
        const changeMenuTab = (e)=>{
            menuTab.map((item,index)=>{
                console.log(item,index)
            })
        }

            return{
                //reactive
                menuTab
                //ref
                //methods
            }
        }
    }
</script>

<style scoped lang='scss'>
    #login{
        height:100vh;
        background-color:rosybrown;
    }
    .login-wrap{
        width:400px;
        height:400px;
        margin:auto;
    }
    .menu-tab{
        text-align:center;
        li{
            display:inline-block;
            width:88px;
            height:36px;
            line-height:36px;
            font-size:20px;
            color:#fff;
            border-radius:2px;
            cursor:pointer;
        }
        .current{
        background-color:rgba(0,0,0,.1)
        }
    }
    
</style>

