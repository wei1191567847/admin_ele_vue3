import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export const exit_ = ()=>{
    const store = useStore()
    const router = useRouter()
    const exit = ()=>{
        
         store.dispatch('app/exit')

            
        }
    
    return {
        exit
    }

}