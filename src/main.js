import { createApp } from 'vue'
import App from './components/Map' // 为了方便，直接加载Map.vue,正式环境要用路由做
import router from './router'
import store from './store'
import esriConfig from '@arcgis/core/config'
import '@arcgis/core/assets/esri/themes/light/main.css' // 引入本地的arcgis api样式文件
esriConfig.assetsPath = './assets' // 设置资产路径

createApp(App).use(store).use(router).mount('#app')
