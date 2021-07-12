import  { reactive, ref } from 'vue'
import {filterEmail,validate_email,validate_password,validate_code} from '@/utils/filter_form_value.js'  
export const login_register_form_data = ()=>{


    //表单数据
        const ruleForm = reactive({
                username: '',
                password:"",
                password1:'',
                code:''
            })


        //表单的引用
        const formRef = ref(null)
        const validatorName = (rule,value,callback)=>{
               ruleForm.username = value = filterEmail(value)
               if(value === '') { //字母数字下划线
                    callback(new Error('账号必须填~~'))
                }else if(!validate_email(value)){
                    callback(new Error('账号格式必须是有效邮箱~~'))
                }else{
                    callback()
                }
            }


        const validataPass = (rule,value,callback)=>{
                validate_password(value)
                 if(value === '') {
                    callback(new Error('密码必须填写'))
                }else if(!validate_password(value)){
                    callback(new Error('密码必须是6到20位'))
                    
                }else{
                    callback();
                }
            }


        const validataPass1 = (rule,value,callback)=>{
                 if(value === '') {
                    callback(new Error('重复密码必须填'))
                }else if(value !== ruleForm.password){
                    callback(new Error('两次密码必须一致'))
                }else{
                    callback();
                }
            }


        const validateCode = (rule,value,callback)=>{
                if(value === '') {
                    callback(new Error('验证码必须填写'))
                }else if(!validate_code(value)){
                    callback(new Error('验证码格式错误'))
                }else{
                    callback();
                }
            }




        const rules = reactive({
                username: [
                        { validator: validatorName,   trigger: 'blur' }
                    ],
                password: [
                        { validator: validataPass,   trigger: 'blur' }
                    ],
                password1: [
                       { validator: validataPass1,   trigger: 'blur' }
                    ],
                    code:[
                        { validator:validateCode, trigger:'blur'}
                    ]
            }) 


        const submitType = ref('登录')


        return{
            ruleForm,
            rules,
            validateCode,
            validataPass1,
            validataPass,
            validatorName,
            submitType,
            formRef,


        }
}