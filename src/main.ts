import { createApp } from 'vue'
import './style.css'
import './style/reset.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import DrivingTop from './components/driving_top/index.vue'
import DrivingBottom from './components/driving_bottom/index.vue'
// 引入vue-router核心插件并安装
import router from "./router";
const app = createApp(App);
app.component("DrivingBottom",DrivingBottom)
app.component("DrivingTop",DrivingTop)
// 使用elementui组件库
app.use(ElementPlus)
// 安装vue-router
app.use(router);
app.mount('#app')
