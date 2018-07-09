const root = {}
root.mode = 'history'
root.fallback = true
root.base = '/'

root.routes = []


root.routes.push({
  path: '/',
  name: 'HelloWorld',
  component: resolve => require(['@/components/vue/HelloWorld'], resolve)
})


export default root

