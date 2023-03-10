import axios from 'axios';
// 配置新建一个 axios 实例
const service = axios.create({
    baseURL: '/',
    timeout: 50000,
    headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么 token
        if (localStorage.getItem('token')) {
            config.headers['Authorization'] = `${localStorage.getItem('token')}`;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// // 添加响应拦截器
// service.interceptors.response.use(
//     (response) => {
//         // 对响应数据做点什么
//         const res = response.data;
//         if (res.code && res.code !== 1000) {
//             // `token` 过期或者账号已在别处登录
//             if (res.code === 401 || res.code === 4001) {
//                 localStorage.clear(); // 清除浏览器全部临时缓存
//                 window.location.href = '/'; // 去登录页
//                 message.info('你已被登出，请重新登录')
                    
//             }
//             return Promise.reject(service.interceptors.response);
//         } else {
//             return response.data;
//         }
//     },
//     (error) => {
//         // 对响应错误做点什么
//         if (error.message.indexOf('timeout') != -1) {
//             message.error('网络超时');
//         } else if (error.message == 'Network Error') {
//             message.error('网络连接错误');
//         } else {
//             if (error.response.data) message.error(error.response.statusText);
//             else message.error('接口路径找不到');
//         }
//         return Promise.reject(error);
//     }
// );
// 导出 axios 实例
export default service;
