<template>
    <div id="layout" :class='isCollapse? "close":"open"'>
        <LayoutHeader/>
        <LayoutContent/>
        <LayoutNav/>
    </div>
</template>

<script>
import LayoutHeader from './components/Header'
import LayoutContent from './components/Content'
import LayoutNav from './components/Nav'
import {isCollapseMenu} from '@/hooks/vuex/isCollapseMenu.js'


export default {
    components:{LayoutHeader,LayoutContent,LayoutNav},
    setup(){
        const {isCollapse} = isCollapseMenu()
        return{
            isCollapse
        }
    }
}
</script>

<style>

</style>