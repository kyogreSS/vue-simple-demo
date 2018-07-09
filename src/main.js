// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import preHandler from './configs/preHandler/preHandler'
import Router from "vue-router"
import routerConfigs from './configs/routerConfigs/routerConfigs'
import Vuex from 'vuex'
import StoreConfigs from './configs/storeConfigs/storeConfigs'


Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)


const router = new Router(routerConfigs)
const store = new Vuex.Store(StoreConfigs)


// 异步加载，等待预先处理结束再挂载组件
async function mountApp() {
  await preHandler()
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
  })
}

mountApp()
