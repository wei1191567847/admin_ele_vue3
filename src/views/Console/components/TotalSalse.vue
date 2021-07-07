<template>
    <commonCard 
        title="累计销售额"
        value='￥ 32,039,165'
    >
    <template v-slot:chart>
        <div class="chart-wrap">
            <div class="compare">
                <span>日同比</span>
                <span class="money">7.12%</span>
                <div class="increase"></div>
            </div>
            <div class="compare">
                <span>月同比</span>
                <span class="money">7.13%</span>
                <div class="decrease"></div>
            </div>

        </div>
    </template>  
    <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="money">￥ 30,000,000</span>
    </template>  
    </commonCard>
</template>

<script>
import CommonCard from './CommonCard.vue'
export default {
    components:{CommonCard}
}
</script>

<style lang="scss" scoped>
    .money{
        margin-left:5px;
        color:#333;
        font-weight:700;
        font-size:12px;
    }
    .chart-wrap{
        height:100%;
        display:flex;
        flex-direction: column;
        .compare{
            font-size:12px;
            height:50%;
            margin-top: 3px;
            color:#666;
            font-weight:700;
            display:flex;
            align-items: center;
        }
        .increase{
            width:0px;
            height:0px;
            border-width:6px;
            border-color:transparent transparent red transparent;
            border-style:solid;
            margin:0 0 3px 5px;
        }
        .decrease{
            width:0px;
            height:0px;
            border-width:6px;
            border-color:red transparent transparent  transparent;
            border-style:solid;
            margin:3px 0 0 5px;
        }
    }
</style>