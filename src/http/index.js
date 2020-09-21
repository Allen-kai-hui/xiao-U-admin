/**
 * 重写get 和 post
 * 因为基础用法的get和post无法携带请求头，也就无法传递token
 */

import axios from 'axios'
import router from '../router/index'


let instance = axios.create({
    baseURL: "/api",
    timeout: 6000
})

// 请求拦截，所有的http请求都会被拦截下来
//  instance.interceptors.request.use((config) => {
//     // config 关于请求的所有信息
//     console.log(config)
//     // 
//     config.headers.token = "123456"
//     return config
//  })


//  // 相应拦截
//  instance.interceptors.response.use((res) => {
//     console.log(res)
//     if (res.data.code == "401") {
//         // 跳到登录页
//         router.push("/my/login")
//     }
//     return res
//  })


// {id: 1}
function get(url, params) {
   return instance.get(url, {
       params
   })
}

function post(url, params) {
    return instance.post(url, params)
}


export default {
    get,
    post
}