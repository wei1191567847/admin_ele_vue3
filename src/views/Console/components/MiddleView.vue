<template>
    <div class="salse-view">
        <el-row :style='{padding:"20px"}'>
            <el-col>
                <el-card>
                    <TotalType/>
                </el-card>

            </el-col>
            <el-col>
                <el-card body-style='{padding:"0px"}'>
                    <template #header>
                        <div class="header-wrap" >
                            <el-menu class="slase-el-menu"  mode="horizontal" default-active='menuIndex' @select="toggleMenu">
                                <el-menu-item index="1" class="slase-el-menu-item">销售额</el-menu-item>
                                <el-menu-item index="2" class="slase-el-menu-item">访问量</el-menu-item>
                            </el-menu>

                            <div class="menu-right">
                                <el-radio-group v-model="radiovalue" size="mini" @change="seletRadio" class="radio-group">
                                    <el-radio-button label="今年"></el-radio-button>
                                    <el-radio-button label="本季度"></el-radio-button>
                                </el-radio-group>

                                <el-date-picker
                                    ref='datepicker'
                                    type='daterange'
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :shortcuts="shortcuts"
                                    v-model="dateTime"
                                    @change="selectTime"
                                    size='mini'
                                
                                ></el-date-picker>
                            </div>

                        </div>
                    </template>
                    <div class="chart-wrap">
                        <div class="left">
                            <v-chart :option="option" class="chart"></v-chart>
                        </div>
                        <div class="right">
                            <div class="list-title">排行榜</div>
                            <div class='list-item' v-for='item in rankData' :key='item.no'>
                                <div class='item-no' :class='+item.no <=3 ? "top":""'>{{item.no}}</div>
                                <div class="item-name">{{item.name}}</div>
                                <div class="item-value">{{item.money}}</div>

                            </div>
                        </div>
                    </div>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>

<script>
import {reactive,ref,watchEffect} from 'vue'
import TotalType from './TotalType.vue'
export default {
    components:{TotalType},
    setup(){
        // menu 相关
        const menuIndex = ref('1')
        const toggleMenu = value => menuIndex.value = value
            
        //radio相关
        const radiovalue = ref('今年')
        const seletRadio = value => radiovalue = value

        // datepicker相关
        const dateTime = ref('')
        const shortcuts = reactive([
            {
                text:'最近一周',
                value:(()=>{
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 *6)
                    return [start,end]
                })(),
            },
            {
                text:'最近一个月',
                value:(()=>{
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                    return [start,end]
                })(),
            },
            {
                text:'最近三个月',
                value:(()=>{
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30 * 2)
                    return [start,end]
                })(),
            }
        ])
        const datepicker = ref(null)
        const selectTime = ()=>{
            datepicker.value.focus()
        }



        //Echarts 相关
        const normolizeData = (data)=>{
             console.log(radiovalue.value)
             let title = ((data && data.title.length>0) ? `${radiovalue.value}${data.title}`: '数据报表')
             let xAxisData = []
             let seriesData = []

             data.data.map((item,index) =>{
                 if(radiovalue.value == '本季度' && index <=2){
                    xAxisData.push(item.name)
                    seriesData.push(item.value)
                 }
                 if(radiovalue.value == '今年'){
                    xAxisData.push(item.name)
                    seriesData.push(item.value)
                 }
                 
             })
            return{
                title,xAxisData,seriesData,
            }
        }      
        
        const loadSalseData = ()=>{
            return {
                title:'销售量',
                data:[
                    {id:1,name:'1月',value:900},
                    {id:2,name:'2月',value:1100},
                    {id:3,name:'3月',value:600},
                    {id:4,name:'4月',value:800},
                    {id:5,name:'5月',value:1200},
                    {id:6,name:'6月',value:500},
                    {id:7,name:'7月',value:770},
                    {id:8,name:'8月',value:600},
                    {id:9,name:'9月',value:1000},
                    {id:10,name:'10月',value:650},
                    {id:11,name:'11月',value:400},
                    {id:12,name:'12月',value:890},
                ]
            }
        }

        const loadVisiData = ()=>{
            return{
                title:'访问量',
                data:[
                    {id:1,name:'1月',value:200},
                    {id:2,name:'2月',value:400},
                    {id:3,name:'3月',value:500},
                    {id:4,name:'4月',value:700},
                    {id:5,name:'5月',value:900},
                    {id:6,name:'6月',value:500},
                    {id:7,name:'7月',value:770},
                    {id:8,name:'8月',value:600},
                    {id:9,name:'9月',value:1200},
                    {id:10,name:'10月',value:350},
                    {id:11,name:'11月',value:700},
                    {id:12,name:'12月',value:890},
                ]
            }
        }

        const loadData = ()=>{
            // console.log(menuIndex.value,radiovalue.value)
            const rawData = (menuIndex.value == 1 ? loadSalseData() : loadVisiData())
            return normolizeData(rawData) 
        }

        const iniOption = async ()=>{
            const data = await loadData()
            option.title.text = data.title
            option.xAxis.data = data.xAxisData
            option.series[0].data = data.seriesData
        }

        watchEffect(()=>{
            iniOption()
        })

        //排行相关
        const rankData = reactive([
            {no:1,name:'麦当劳',money:'12'},
            {no:2,name:'麦当劳',money:'12'},
            {no:3,name:'麦当劳',money:'12'},
            {no:4,name:'麦当劳',money:'12'},
            {no:5,name:'麦当劳',money:'12'},
            {no:6,name:'麦当劳',money:'12'},
            {no:7,name:'麦当劳',money:'12'},
        ])

        //chart
        const option = reactive({
            color:'#f56c6c',
            title:{
                text:'',
                left:'left',
                textStyle:{
                    fontSize:12,
                    color:'#666',
                },
                left:20,
                top:25
            },
            grid:{
                top:70,left:60,right:60,bottom:50
            },
            xAxis:{
                type:'category',
                data:[],
                axisTick:{
                    alignWithLabel:true
                },
            },
            yAxis:{
                splitLine:{
                    lineStyle:{
                        type:'dotted',
                        color:'#666'
                    }
                }
            },
            series:[{
                type:'bar',
                barWidth:'40%',
                data:[]

            }]
        })
        return{
            toggleMenu,menuIndex,
            radiovalue,seletRadio,
            shortcuts,dateTime,selectTime,datepicker,
            option,
            rankData
        } 
    }
}
</script>

<style lang='scss' scoped>
.salse-view{
    .header-wrap{
        display:flex;
        position:relative;
        height:50px;
        .slase-el-menu{
            width:100%;
            padding-left:20px;
            .slase-el-menu-item{
                margin-left:40px;
            }
        }
        .menu-right{
            position:absolute;
            right:20px;
            height:50px;
            display:flex;
            align-items:center;
            justify-content: flex-end;
            .radio-group{
                margin-right:20px;
            }


        }
    }
    .chart-wrap{
      display: flex;
      height: 270px;
        .left{
            width:80% ;
            height:270px;
            .chart{
                width:100%;
                height:100%;
            
            }
        } 
        .right {
            width: 30%;
            height: 100%;
           
            .list-title{
                font-size: 12px;
                color: #666;
                font-weight: 700;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .list-item {
                display: flex;
                align-items: center;
                font-size: 12px;
                height: 25px;
                .item-no{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 20px;
                    color: #000;
                    &.top{
                        background-color: #f56c6c;
                        border-radius: 50%;
                        font-weight: 900;
                        color: #fff;
                    }
                }
                .item-name{
                    margin-left: 20px;
                    color: #333;


                }
                .item-value{
                    text-align: right;
                    flex: 1;
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>