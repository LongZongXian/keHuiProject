//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';
import { ElMessage } from 'element-plus';
//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = '/api';
const instance = axios.create({ baseURL })

import { useTokenStore } from '@/stores/token.js'

instance.interceptors.request.use(
    (config) => {
        let tokenStore = useTokenStore();
        //请求前回调
        if (tokenStore.token) {
            config.headers.Authorization = tokenStore.token;
        }
        return config
    },
    (err) => {
        Promise.reject(err)
    }
)

import router from '@/router/index.js'

//添加响应拦截器
instance.interceptors.response.use(
    result => {
        if (result.data.code === 0) {
            return result.data;
        }

        // alert(result.data.msg?result.data.msg:'服务异常')
        ElMessage.error(result.data.message ? result.data.message : '服务异常');
        return Promise.reject(result.data);//异步的状态转化成失败的状态
    },
    err => {
        if (err.response.status === 401) {   //未登录
            if (!sessionStorage.getItem('loginAlertShown')) {
                // 弹出提示未登录
                ElMessage.error('登录已失效,请重新登录')
                // 设置标志，防止重复弹出
                sessionStorage.setItem('loginAlertShown', 'true');
            }
            router.push('/login')
            setTimeout(() => {
                sessionStorage.removeItem('loginAlertShown')
            }, 2000);
        } else {
            ElMessage.error('服务异常')
        }
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)

export default instance;