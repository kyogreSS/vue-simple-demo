const socket = {}

socket.url = process.env.SOCKET || ''


socket.options = {}
socket.options.path = ''  //请求路径
socket.options.transports = [] //请求


socket.options.reconnection = true //是否自动重新连接
socket.options.reconnectionAttempts = 100 //重新连接尝试次数
socket.options.reconnectionDelayMax = 3000 //重新连接之间最长等待时间
socket.options.timeout = 20000 //connect_error和connect_timeout事件发出之前的等待时间
socket.options.autoConnect = true //自动连接
socket.options.query = {} //携带的query


export default socket
