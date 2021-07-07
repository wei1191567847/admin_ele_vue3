import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {registeSvgIcon} from './icons/index.js'



//按需加载element组件的

import {useElement} from './useElement.js'
import Echarts from 'vue-echarts'



const app = createApp(App)

useElement(app)
registeSvgIcon(app)

app.component('v-chart',Echarts)
app.use(store).use(router)

app.mount("#app");

