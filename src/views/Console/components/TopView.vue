<template>
    <el-row :style='{padding:"20px"}' :gutter="10">
        <el-col :span='6'>
            <el-card shadow='hover'>
                <TotalSalse/>
            </el-card>
        </el-col>

        <el-col :span='6'>
            <el-card shadow='hover'>
                <TotalOrder/>
            </el-card>
        </el-col>

        <el-col :span='6'>
            <el-card shadow='hover'>
                <TodayUser/>
            </el-card>
        </el-col>

        <el-col :span='6'>
            <el-card shadow='hover'>
                <TotalUser/>
            </el-card>
        </el-col>
    </el-row>
    

            
</template>

<script>
import TotalSalse from './TotalSalse.vue'
import TotalOrder from './TotalOrder.vue'
import TodayUser from './TodayUser.vue'
import TotalUser from './TotalUser.vue'

export default {
    components:{TotalSalse,TotalOrder,TodayUser,TotalUser},

}
</script>

<style>

</style>