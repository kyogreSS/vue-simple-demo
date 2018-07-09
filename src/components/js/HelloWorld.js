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

}

root.mounted = function () {

}

root.beforeDestroy = function () {

}

/*------------------------------- 方法 -------------------------------*/
root.methods = {}


export default root
