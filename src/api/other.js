import axios from 'axios'
import {serverUrl} from '@/config/utils.js'

// 从koa2服务端获取七牛云token
export const getQiniuToken = () => {
  return axios({
    url: 'https://fengblog.xyz:3029/message/getQiniuToken',
    method: 'get'
  })
}

//获取最新消息
export const getNewMessage = params => {
  return axios({
    url: serverUrl + '/CoderSite/message/getNewMessage',
    method: 'get',
    params
  })
}

//获取某用户的私信列表
export const getMyChatList = params => {
  return axios({
    url: serverUrl + '/CoderSite/chatList/getMyChatList',
    method: 'get',
    params
  })
}

//获取私聊详情
export const getMyChatListWithUser = params => {
  return axios({
    url: serverUrl + '/CoderSite/chatList/getMyChatListWithUser',
    method: 'get',
    params
  })
}

//发送私聊
export const addChat = data => {
  return axios({
    url: serverUrl + '/CoderSite/chatList/addChat',
    method: 'post',
    data
  })
}