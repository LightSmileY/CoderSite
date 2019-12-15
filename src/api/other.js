import axios from 'axios'
import {serverUrl} from '@/config/utils.js'

// 从koa2服务端获取七牛云token
export const getQiniuToken = () => {
  return axios({
    url: 'https://fengblog.xyz:3029/message/getQiniuToken',
    method: 'get'
  })
}