import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


//按需加载element组件的

import {useElement} from './useElement.js'
import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App)

useElement(app)

app.use(store).use(router)

app.mount("#app");

