import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

import { useUserStore } from '@/stores/userStore'

// import { useRouter } from 'vue-router'
// const router = useRouter()
import router from '@/router'

const http=axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  http.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    // 统一错误提示
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    })
    //401token失效处理
    if(e.response.status===401){
      userStore.clearUserInfo()
      router.push('/login')
    }

    return Promise.reject(e)
  })
export default http