<template>
    <svg aria-hidden="true" :class="iconClass_">
        <use :xlink:href='iconName_'></use>
    </svg>
</template>

<script>
import {computed} from 'vue'
export default {
    props:{
        iconName:{
            type:String,
            default:'user'
        },
        iconClass:{
            type:String,
            default:''
        }
    },
    setup(props){
        const {iconName,iconClass} = props
        const iconName_ = computed(()=>{
            return `#icon-${iconName}`
        })
        const iconClass_ = computed(()=>{
            return iconClass ? `svg ${iconClass}` : 'svg'
        })
        return{
            iconName_,iconClass_
        }
    }
        
    
}
</script>

<style>
.svg{
    width:20px;
    height:20px;
    padding:0 10px;
    fill:yellowgreen;
}
</style>