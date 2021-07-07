import SvgIcon from '@/components/SvgIcon.vue'


const res = require.context('./svg',false,/\.svg$/)


res.keys().map(res)




export const registeSvgIcon =(app)=>{
    app.component('svg-icon',SvgIcon)
}