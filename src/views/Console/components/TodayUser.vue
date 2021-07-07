<template>
    <CommonCard
      title="今日交易用户数"
      value="818,121"
    >
      <template v-slot:chart>
        <div class="today-user-chart" ref="ec"></div>

      </template>
      <template #footer>
        <span>退货率</span>
        <span class="money">4.11%</span>
      </template>
    </CommonCard>
</template>

<script>
import CommonCard from './CommonCard.vue'
import {inject,onMounted,ref} from 'vue'
export default {
  components:{CommonCard},
  setup(){
    const echarts = inject('ec')
    const ec = ref(null)
    const formatterTipLine = (params, unit, color)=>{
        //这里要根据实际传来的值，进行后面的逻辑操作。
        //有时候传进来的可能不是一个对象
        var tip = '';
        var colorIn = color ? color : '#446AA9';
        tip = tip + '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + colorIn + ';"></span>'
        tip = tip + '<span>' + params.data[0] + ':</span>' + '<span style="font-weight:blod">' + params.data[1]  + '</span>'
        return tip;
    }
    onMounted(()=>{
      const echartsObj = echarts.init(ec.value)
      echartsObj.setOption({
        color:['#3398DB'],
        xAxis:{
          type:'category',
          show:false,
          data:['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00']
        },
        yAxis:{
          show:false
        },
        grid:{
          top:0,bottom:0,right:0,left:0
        },
        series:[{
          type:'bar',
          data:[410,82,200,334,390,430,220,150,82,200,134,290,330,150],
          barWidth:'60%'

        }],
        //鼠标移入提示
        tooltip:{
          position:(point,params)=>{
            console.log('point',point)
            console.log('params',params)
            return[20,20]
          },
            formatter:(params)=>{//提示框自定义
            // console.log(params)
            let html = `${params.marker} 当前时间${params.name} 的销售额:${params.value}`
            return html
                // return formatterTipLine(params, "%", "#f9d546")
            }  

        }
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
.today-user-chart{
  height:100%;
  width:100%;

}
</style>