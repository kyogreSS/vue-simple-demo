const store = {}

store.state = {}

store.state.test = ''

/**
 * 同步修改state
 * @type {{}}
 */
store.mutations = {}
store.mutations.testFunc = (state, info) => {
  state.test = info
}


/**
 * 异步修改state
 * @type {{}}
 */
store.actions = {}

store.getters = {}


export default store
