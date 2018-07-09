// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import preHandler from './configs/preHandler/preHandler'
import Router from "vue-router"
import RouterConfigs from './configs/routerConfigs/routerConfigs'
import Vuex from 'vuex'
import StoreConfigs from './configs/storeConfigs/storeConfigs'
import NetworkInterceptors from './configs/networkConfigs/networkInterceptors'

import Network from 'vue-network-use-axios'
import address from './configs/networkConfigs/address'
import networkConfigs from './configs/networkConfigs/networkConfigs'

import EventBus from 'vue-event-bus-use-map'


Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Network, {address, networkConfigs})
Vue.use(EventBus)


const router = new Router(RouterConfigs)
const store = new Vuex.Store(StoreConfigs)


NetworkInterceptors(Vue.$http.getAxios())


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
