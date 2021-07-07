<template>
    <CommonCard
      title="累计订单量"
      value="12,313,111"
    >
      <template v-slot:chart>
        <div class="total-order-chart" ref="ec"></div>

      </template>
      <template #footer>
        <span>昨日订单量</span>
        <span class="money">310,200,300</span>
      </template>
    </CommonCard>
</template>

<script>
import CommonCard from './CommonCard.vue'
/*
    1.引入echarts
    2.选择Dom容器 设置宽 100% 高100%
    3.获取Dom 容器
    4.执行初始化option 参数
    5.调用 setOption 完成绘制
*/
import {inject,onMounted,ref} from 'vue'
export default {
  components:{CommonCard},
  setup(){
    const echarts = inject('ec')
    const ec = ref(null)
    
    onMounted(()=>{
      const echartsObj = echarts.init(ec.value)
      echartsObj.setOption({
        xAxis:{
          type:'category',
          show:false,
          boundaryGap:false //默认是true,消除x轴图形和画布的间距
        },
        yAxis:{
          show:false  //隐藏y轴
        },
        //调整画布和外层容器的间距
        grid:{
          top:0,bottom:0,right:0,left:0
        },
        series:[{
          type:'line',
          data:[620,432,220,543,790,430,220,320,532,320,834,690,530,220,620],
               areaStyle:{
                 color:'purple'
               },
               lineStyle:{
                 width:0
               },
               itemStyle:{
                 opacity:0
               },
               smooth:true
        }]
      })
    })
    return{
      ec
    }
  }
}
</script>

<style lang="scss" scoped>
.money{
  margin-left:5px;
  color:#333;
  font-weight:700;
  font-size:12px;
}
.total-order-chart{
  height:100%;
  width:100%;

}
</style>