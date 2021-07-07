import {useStore} from 'vuex'
import {computed} from 'vue'

export const isCollapseMenu = ()=>{
    const store = useStore()
    const toggleCollapse = ()=>{
        //commit SET_COLLAPSE
        store.commit('app/SET_COLLAPSE','abc')
    }

    const isCollapse = computed(()=>{
        return store.state.app.isCollapse
    })

    return{
        toggleCollapse,isCollapse
    }
}