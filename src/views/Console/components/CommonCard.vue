<template>
    <div class="common-card">
        <div class="title">{{title}}</div>
        <div class="value">{{value}}</div>
        <div class="chart">
            <slot name="chart"></slot>
        </div>
        <div class="line"></div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
    
</template>

<script>

export default {
    props:{
        title:{
            type:String
        },
        value:{
            type:String
        }
    },
    setup(props){
        const{title,value} = props
        return{
            title,value
        }
    }
}
</script>

<style lang="scss" scoped>
.common-card{
    .title{
        font-size:12px;
        color:#999;
    }
    .value{
        font-size:25px;
        color:#000;
        letter-spacing: 2px;
        margin-top:15px;
    }
    .chart{
        height:60px;
        margin-top:10px;
    }
    .line{
        margin:10px 0;
        border-top:1px solid #eee;
    }
    .footer{
        color:#666;
        font-size:12px;
    }

}
</style>