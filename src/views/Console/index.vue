<template>
<div class="echart">
    <TopView/>
    <MiddleView/>
</div>
    
    
</template>

<script>

import TopView from './components/TopView.vue'
import MiddleView from './components/MiddleView.vue' 
import {inject} from 'vue'
/*
    1.引入echarts
    2.选择Dom容器 设置宽 100% 高100%
    3.获取Dom 容器
    4.执行初始化option 参数
    5.调用 setOption 完成绘制
*/
export default {
    components:{TopView,MiddleView},
    setup(){
        const echarts = inject('ec')
        
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .echart{
        width:100%;
        height:auto;
        background-color:#ccc;
    }
</style>