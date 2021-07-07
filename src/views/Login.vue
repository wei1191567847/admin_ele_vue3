<template>
    <div id="login">
        <div class="login-wrap">
            <!--登录注册的切换-->
            <ul class="menu-tab">
                <li  @click="changeMenuTab" :class='{current:menu.current}' v-for='menu in menuTab' :key='menu.text'>{{menu.text}}</li>
            </ul>
         
             <!--form 开始-->
            <el-form :model="ruleForm" :rules="rules" ref='formRef' class="login-from" label-width="100px">
                <el-form-item class="form-item" prop="username" size="mini">
                    <label>账号</label>
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="password" size="mini">
                     <label>密码</label>
                     <el-input type="text" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item v-if='submitType == "注册"' class="form-item" prop="password1" size="mini">
                     <label>确认密码</label>
                     <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="code" size="mini">
                     <label>验证码</label>
                     <el-row :gutter="20">
                        <el-col :span='15'>
                            <el-input v-model='ruleForm.code' minlength='6' maxlength='6'/>
                        </el-col>
                        <el-col :span='9'>
                            <el-button type='success' class="block width" :disabled='butStatus' @click='sendCode'>{{butText}}</el-button>
                        </el-col>
                     </el-row>
                </el-form-item>
                 <el-form-item class="form-item" size="mini" >
                    <el-button type="success" @click="submitForm">{{ submitType }} {{token}}</el-button>
                </el-form-item>
             </el-form>
             <!--form 结束-->
        </div>
            
    </div>
</template>

<script>
/*
    axios 请求拦截    响应拦截
 */
import {login_register_form_data} from '@/hooks/login/formValidate.js'
import {send_code} from '@/hooks/login/sendCode.js'
import { reactive, watchEffect ,ref,onUnmounted} from 'vue'
import { ElMessage } from 'element-plus'
import {getCode,register} from '@/api/login.js'

import {useStore} from 'vuex'
import {createNamespacedHelpers} from 'vuex'
const {mapState,mapActions,mapGetters} = createNamespacedHelpers('some/nested/module')

export default {
        setup(props,cxt){
//data
        //菜单切换tab数据            
        const menuTab = reactive([

                {
                    text:'登录',
                    current:true
                },
                {
                    text:'注册',
                    current:false
                }
            ])
        //引入from 表单验证相关
        const {ruleForm,rules,submitType,formRef} = login_register_form_data()
        //引入code相关
        const {butText,butStatus,sendCode,clearTimers,updateCodeStatus,message} = send_code(ruleForm,getCode,submitType)


//computed
      watchEffect(()=>{
          const cur = menuTab.filter(menu=>{
              return menu.current
          })
          submitType.value = cur[0].text
      })

//methods   
        const store = useStore()
        const doLogin = ()=>{
            //调用action 登录业务
            store.dispatch('app/login',{
                username:ruleForm.username,
                password:ruleForm.password,
                code:ruleForm.code
            })
          
        }

        const doRegister = ()=>{
            //注册业务
            register({
                username:ruleForm.username,
                password:ruleForm.password,
                code:ruleForm.code
            }).then(res=>{
                
            })
        }
        //切换登录和注册                   
       const changeMenuTab = (e)=>{
            menuTab.map((item,index)=>{
                   if(item.text == e.target.innerHTML){
                       item.current = true
                   } else{
                       item.current = false
                   }
                   
                })
                //还原按钮状态
                updateCodeStatus({
                    disable:false,
                    text:'获取验证码'
                })
                butText.value = `获取验证码`
                butStatus.value = false
                //清除定时器
                clearTimers()
            }
            // mapGetters 
            const token = computed({
                
            })
     
        //表单提交
        const submitForm = ()=>{
            //验证表单的每一项是否通过
            formRef.value.validate((valid,obj) =>{
                if(valid){
                    submitType.value === '登录' ? doLogin() : doRegister()
                }else{
                    ElMessage({
                        showClose: true,
                        message: '表单数据不正确',
                        type: 'warning'
                    })
                    return false;
                }
                
            });
        }
        
                
                

//生命周期
        onUnmounted(()=>{
            clearTimers()
        })


        return{
            //reactive
            menuTab,
            ruleForm,
            rules,
            //ref
            butText,butStatus,
            //methods
            submitType,
            changeMenuTab,sendCode,formRef,submitForm,
            token
        }
    },
         
}
    
</script>

<style scoped lang='scss'>
    #login{
        height:100vh;
        background-color:darkgray;
    }
    .login-wrap{
        width:400px;
        height:400px;
        margin: auto;
    }
    .menu-tab{
        text-align:center;
        li{
            display:inline-block;
            width:88px;
            height:40px;
            line-height:40px;
            font-size:14px;
            color:#fff;
            border-radius:2px;
            cursor:pointer;
        }
        .current{
        background-color:rgba(185, 28, 125, 0.3)
        }
    }
    .login-from{
        margin-top: 30px;
        label{
            display: block;
            font-size: 14px;
            margin-bottom: 3px;
            color: #fff;
        }
        .form-item{
            margin-bottom: 25px;
        }
        .block{
            display:block
        }
        .width{
            width:100px;
        }
        button{
            background-color:mediumseagreen;
        }
    }
    
</style>

