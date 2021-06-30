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
                <el-form-item v-if='submiType == "注册"' class="form-item" prop="password1" size="mini">
                     <label>确认密码</label>
                     <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="code" size="mini">
                     <label>验证码</label>
                     <el-row :gutter="20">
                        <el-col :span='15'>
                            <el-input v-model='ruleForm.code' minlength='4' maxlength='6'/>
                        </el-col>
                        <el-col :span='9'>
                            <el-button type='success' class="block width" :disabled='butStatus' @click='sendCode'>{{butText}}</el-button>
                        </el-col>
                     </el-row>
                </el-form-item>
                 <el-form-item class="form-item" size="mini" >
                    <el-button type="success" @click="submitForm">{{ submiType }}</el-button>
                </el-form-item>
             </el-form>
             <!--form 结束-->
        </div>
            
    </div>
</template>

<script>
import {login_register_form_data} from '@/hooks/login/formValidate.js'
import {send_code} from '@/hooks/login/sendCode.js'
import { reactive, watchEffect ,ref,onUnmounted} from 'vue'
import { ElMessage } from 'element-plus'
import {getCode,login} from '@/api/login.js'

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
        const {ruleForm,rules,submiType,formRef} = login_register_form_data()
        //引入code相关
        const {butText,butStatus,sendCode,clearTimers,updateCodeStatus} = send_code(ruleForm,getCode)


//computed
      watchEffect(()=>{
          const cur = menuTab.filter(menu=>{
              return menu.current
          })
          submiType.value = cur[0].text
      })

//methods   
        const doLogin = ()=>{
            //登录业务
            login().then(res=>{
                console.log('user:',res)
            })
        }

        const doRegister = ()=>{
            
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

        const submitForm = ()=>{
            //验证表单的每一项是否通过
            formRef.value.validate((valid,obj) =>{
                if(valid){
                    submiType.value === '登录' ? doLogin() : doRegister()
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
            submiType,
            changeMenuTab,sendCode,formRef,submitForm
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

