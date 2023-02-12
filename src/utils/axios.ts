import axios from 'axios';

// 配置新建一个 axios 实例
const service = axios.create({
    baseURL: '/api',
    timeout: 50000,
    headers: { 'Content-Type': 'application/json' },
});

// 导出 axios 实例
export default service;
