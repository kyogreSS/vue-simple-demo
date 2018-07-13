const root = {}
root.name = 'HelloWorld'


/*------------------------------- 组件 -------------------------------*/
root.components = {
  'testComponent': resolve => require(['../vue/HelloWorld'], resolve),
}
/*------------------------------- data -------------------------------*/


root.data = function () {
  return {
    msg: 'Welcome to Your Vue.js App'
  }
}


/*------------------------------- 计算 -------------------------------*/
root.computed = {}


/*------------------------------- 观察 -------------------------------*/
root.watch = {}


/*------------------------------- 生命周期 -------------------------------*/
root.created = function () {
  this.testNetwork()
  this.testSocket()
}

root.mounted = function () {

}

root.beforeDestroy = function () {

}

/*------------------------------- 方法 -------------------------------*/
root.methods = {}

root.methods.testNetwork = function () {
  this.$http.send('TEST_RUL').then((res) => {

  }).catch((err) => {

  })
}

root.methods.testEventBus = function () {
  this.$eventBus.notify({key: 'TEST'}, '123')
}

root.methods.testSocket = function () {
  // 接收所有币对实时价格
  // 订阅某个币对的信息
  this.$socket.on({
    key: 'KEY',
    bind: this,
    callBack: (message) => {
      console.warn('socket', message)
    }
  })
}

root.methods.testChangeLang = function () {
  this.$i18n.locale = this.$i18n.locale === 'ch' ? 'en' : 'ch'
}

root.methods.testGlobalFunc = function () {
  this.$globalFunc.testFunc()
}


export default root
