/**
 * axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'

// 初始化接口请求前缀
let baseURL = 'mock/'
if (process.env.NODE_ENV === 'production') {
	baseURL = 'https://shuizhongxiong.github.io/vue-demo-qunar/dist/mock/'
}

// 创建axios实例
const service = axios.create({
	baseURL,
	timeout: 10000 // 请求超时时间
})

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
service.interceptors.request.use(
	config => {
		loadingHandle(true) // show loading

		// 设置 token header
		// const token = store.state.token
		// token && (config.headers.Authorization = token)
		return config
	},
	error => {
		return Promise.error(error)
	})

// 响应拦截器
service.interceptors.response.use(
	response => {
		loadingHandle(false) // hide loading
		if (response.status === 200) {
			return Promise.resolve(response)
		} else {
			errorHandle(response.status, response.data.message)
			return Promise.reject(response)
		}
	},
	error => {
		loadingHandle(false) // hide loading

		const { response } = error
		if (response) {
			// 请求已发出，但是不在2xx的范围
			errorHandle(response.status, response.data.message)
			return Promise.reject(response)
		} else {
			// 处理断网的情况
			if (!window.navigator.onLine) {
				showToast('网络出错')
			}
		}
	}
)

export default service

/**
* get方法，对应get请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
export function get (url, params) {
	return new Promise((resolve, reject) => {
		service.get(url, params)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err.data)
			})
	})
}
/**
* post方法，对应post请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
export function post (url, params) {
	return new Promise((resolve, reject) => {
		service.post(url, params)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err.data)
			})
	})
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, message) => {
	// 状态码判断
	switch (status) {
	default:
		console.log(message)
	}
}

/**
 * 提示函数，显示一秒后关闭
 */
const showToast = (message) => {
	console.log(`toast --> ${message}`)
}

/**
 * loading 控制
 */
const loadingHandle = (value) => {
	console.log(`loading --> ${value}`)
}
