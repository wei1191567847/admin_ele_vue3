<template>
    <div id="main-wrap">
        
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
#main-wrap{
    position:fixed;
    left:200px;
    top:75px;
    right:0px;
    bottom:0px;
    border:15px solid rgb(243, 238, 238);
    border-bottom:none;
    @inClude transition();
    height:auto;
    overflow-y: scroll;
    overflow-x: hidden;
}

.open{
    #main-wrap{
        left:$navWidth;
    }
}
.close{
    #main-wrap{
        left:$navMinWidth;
    }
}
</style>