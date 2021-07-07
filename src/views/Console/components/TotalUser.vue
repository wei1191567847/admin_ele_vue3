<template>
    <CommonCard
      title="累计用户数"
      value="2,807,123"
    >
      <template #chart>
        <div :style='{height:"100%",width:"100%"}' ref='e_dom'></div>

      </template>
      <template #footer>
        <div class="total-user-footer">
            <span>日同比</span>
            <span class="money">8.74%</span>
            <div class="increase"></div>
            <span>月同比</span>
            <span>7.74%</span>
            <div class="decrease"></div>
        </div>

      </template>
    </CommonCard>
</template>

<script>
import CommonCard from './CommonCard.vue'
import {inject,onMounted,ref} from 'vue'
export default {
  components:{CommonCard},
  setup(){
    const e_dom = ref(null)
    const echarts = inject('ec')
    
    onMounted(()=>{
      const echartsObj = echarts.init(e_dom.value)
      echartsObj.setOption({
        xAxis:{
          type:'value',
          show:false,
        },
        yAxis:{
          type:'category',
          show:false,
        },
        //调整画布和外层容器的间距
        grid:{
          
        },
        series:[
          {
            type:'bar',
            data:[150],
            barWidth:10,
            itemStyle:{
              color:'#45c946'
            },
            stack:'index'
          },
          {
            type:'bar',
            data:[250],
            barWidth:10,
            itemStyle:{
              color:'#ccc'
            },
            stack:'index'
          },
          {
            type:'custom',
            data:[150],
            stack:'index',
            renderItem:(params,api)=>{
              //获取位置
              const value = api.value()
              //转化成绝对位置
              const point = api.coord([value,0])
              return{
                type:'group',
                position:point,
                children:[
                  {
                    type:'path',  //svg
                    shape:{
                      d:"M198.813538 268.918154h651.224616L543.507692 798.089846z",
                      x:-5,
                      y:-20,
                      width:10,
                      height:10
                  },
                  style:{
                    fill:'#45c946'
                  },
                
                  },
                  {
                    type:'path',  //svg
                    shape:{
                      d:"M928 928H96a32 32 0 0 1-28.14-47.24l416-768a32 32 0 0 1 56.28 0l416 768A32 32 0 0 1 928 928z",
                      x:-5,
                      y:10,
                      width:10,
                      height:10
                  },
                  style:{
                    fill:'#45c946'
                  },
                
                  }
                ]
              }
            }

          }
        ]
      })
    })
    return{
      e_dom
    }
  }
}
//<svg t="1625471328566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1933" width="200" height="200"><path d="M198.813538 268.918154h651.224616L543.507692 798.089846z" p-id="1934"></path></svg>
//<svg t="1625471714730" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2713" width="200" height="200"><path d="M928 928H96a32 32 0 0 1-28.14-47.24l416-768a32 32 0 0 1 56.28 0l416 768A32 32 0 0 1 928 928z" p-id="2714"></path></svg>
</script>

<style lang="scss" scoped>
.total-user-footer{
  display:flex;
  align-items:center;
  .increase{
            width:0px;
            height:0px;
            border-width:4px;
            border-color:transparent transparent red transparent;
            border-style:solid;
            margin:0 10px 3px 10px;
        }
        .decrease{
            width:0px;
            height:0px;
            border-width:4px;
            border-color:red transparent transparent  transparent;
            border-style:solid;
            margin:3px 10px 0 10px;
        }
}
.money{
  margin-left:5px;
  color:#333;
  font-size:12px;
}
.total-order-chart{
  height:100%;
  width:100%;

}
</style>