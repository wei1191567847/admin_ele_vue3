
import { ElMessage } from 'element-plus'
import {ref} from 'vue'

export const send_code = (ruleForm,getCode)=>{
    const butText = ref('发送验证码')
    const butStatus = ref(false)
    const num = 10    //倒计时时间

    //??
    let down = null   //倒计时定时器
    let timer_60 = null   //网络延迟定时器

//倒计时业务
    const countDown = (timer)=>{
        timer++;  //看到60
        down = setInterval(()=>{
            timer--;  
            if(timer == -1){ //看到0
                updateCodeStatus({
                    disable:false,
                    text:'重新发送'
                })
                butText.value = `重新发送`
                butStatus.value = false
                clearInterval(down)
            }else{
                butText.value = `倒计时:${timer} (s)`
        }                
                    
    },1000)
}
//点击发送验证码
    const sendCode = ()=>{
        ruleForm.code = ''
//发送验证码之前邮箱必须填写
    if(ruleForm.username == ''){
    //提示消息
        ElMessage({
            showClose: true,
            message: '邮箱必须填写',
            type: 'warning'
        })
    }
    
//更改验证码的状态
    updateCodeStatus({
        disable:true,
        text:'发送中...'
    })
    
    
    timer_60 = setTimeout(()=>{
        getCode().then(res=>{
            ElMessage({
                showClose: true,
                message: `验证码:${res.code}`,
                type: 'success'
            })
            //倒计时时间让用户有60秒有效时间输入
        countDown(num)
        })
    },3000)
     
}
//更改按钮状态
    const updateCodeStatus = ({disable,text})=>{
        butText.value = `发送中`
        butStatus.value = false
    }
//清除定时器
    const clearTimers = () =>{
        clearTimeout(timer_60)
        clearInterval(down)
    }
    return{
        butText,butStatus,down,timer_60,sendCode,countDown,
        clearTimers,updateCodeStatus
    }
}