// 封装所有和用户相关的接口函数
import http from '@/util/http'

export const loginAPI = ({ account, password }) => {
  return http({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}


