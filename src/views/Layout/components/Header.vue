<template>
    <div id="header-wrap">
        <div class='pull-left'>
            <svg-icon iconName='open' iconClass="open" @click="toggleCollapse"/>
          
        </div>
        <div class="pull-right">
            <div class="user pull-left">
                <img src="../../../assets/img/logo.png">
                <span>xiaowei</span>
                <el-button type="warning" size="mini">退出</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {isCollapseMenu} from '@/hooks/ui/isCollapseMenu.js'
export default {
    setup(){
        const {toggleCollapse,isCollapse} = isCollapseMenu()
        return{
            toggleCollapse,isCollapse
        }
    }
}
</script>

<style lang='scss' scoped>
.open{
    width:40px;
    height:40px;
    position:absolute;
    top:15px;
    left:15px;
    fill:violet;
}
#header-wrap{
    position:fixed;
    top:0px;
    left:$navWidth;
    right:0px;
    height:75px;
    line-height:75px;
    @inClude webkit(transition, all .7s ease 0s);
    .pull-left{
        float:left;
        button{
            margin-left:25px;
        }
    }
    .pull-right{
        float:right;
    }
    .user{
        height:100%;
        padding-left:0 30px;
        border-right:2px solid #ededed; 
        span{
            vertical-align: middle;
        }
        img{
            display:inline-block;
            margin-bottom:2px;
            margin-right:18px;
            border-radius:50%;
            width:17%;
            vertical-align: middle;
        }
    }
}
.open{
    #header-wrap{
        left:$navWidth;
    }
}
.close{
    #header-wrap{
        left:$navMinWidth;
    }
}
</style>