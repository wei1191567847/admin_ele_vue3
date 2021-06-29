import 'element-plus/lib/theme-chalk/index.css'
import {

  ElButton,
  ElInput,
 
} from 'element-plus';

const components = [

  ElButton,
  ElInput
  
]


 export const useElement = (app)=>{
        components.forEach(component => {
        //全局组件
            app.use(component)
        })
    }    


