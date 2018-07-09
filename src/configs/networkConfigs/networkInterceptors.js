/**
 * 路由守卫 hjx 2018.1.31
 * 使用方式：
 * axios.interceptors.request.use(root.request.config,root.request.error)
 * axios.interceptors.response.use(root.response.config,root.response.error)
 * 如果想remove这个守卫
 * let myInterceptor = axios.interceptors.request.use(root.request.config,root.request.error)
 * axios.interceptors.request.eject(myInterceptor)
 */


export default function (axios,$router, $event, $store, $http, $cookies) {

  /**
   * 发送请求的守卫
   */
  axios.interceptors.request.use(
    function (config) {
      return config
    },
    function (error) {
      return Promise.reject(error)
    })

  /**
   * 收到请求的守卫
   */
  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    })
}
