<template>
  <router-view/>
</template>
<script>
//引入echarts
import * as echarts from 'echarts'
import { provide } from 'vue'
export default {

    setup(){
        provide('ec',echarts)
        return{
            
        }
    }
}
</script>


<style lang="scss">

</style>
