<template>
    <div id="salse">
        <v-chart class="chart" :option='option'/>
    </div>
</template>

<script>
import {reactive} from 'vue' 
export default {
    setup(){
        const option = reactive({
            title:{
                 text:'销售统计',
                 left:'center'
            },
            //鼠标移入显示
            tooltip:{
                trigger:'item',
                formatter:'{a} <br> {b} : {c} ({d}) %'
            },
            legend:{
               orient:'vertical', //默认是水平方向
               left:'left'
            },
            series:[{
                name:'商品分类统计',
                type:'pie',
                data:[
                    {value:330,name:'美妆,个人洁护'},
                    {value:210,name:'艺术,鲜花礼品'},
                    {value:140,name:'理财/众筹/白条'},
                    {value:1310,name:'医疗保健/计生情趣'},
                    {value:510,name:'房产/汽车'},
                ],
                radius:'60%',
                center:["50%","50%"],
                emphasis:{
                    itemStyle:{
                        shadowBlur:10,
                        shadowColor:"rgba(255,0,0,0.5)",
                        shadowOffsetX:10 
                    }
                }
            }]
        })
        return{
            option
        }
    }
}
</script>

<style lang='scss' scoped>
#salse{
    height:300px;
    .chart{
        width:100%;
        height:100%
    }
}
</style>