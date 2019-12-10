import axios from 'axios'
import {serverUrl} from '../utils/env.js'

axios.defaults.baseURL = 'serverUrl' + '/CoderSite/user/'

/*注册*/
export const login = data => {
  return axios({
    url: 'login',
    method: 'post',
    data
  })
}

/*登录*/
export const register = data => {
  return axios({
    url: 'register',
    method: 'post',
    data
  })
}

/*获取用户资料*/
export const getUserInfo = params => {
  return axios({
    url: 'getUserInfo',
    method: 'get',
    params
  })
}

/*修改用户资料*/
export const updateUserInfo = data => {
  return axios({
    url: 'updateUserInfo',
    method: 'post',
    data
  })
}

/*获取某用户的所有粉丝*/
export const getFansList = params => {
  return axios({
    url: 'getFansList',
    method: 'get',
    params
  })
}

/*获取用户的所有关注*/
export const getAttentList = params => {
  return axios({
    url: 'getAttentList',
    method: 'get',
    params
  })
}

/*关注用户*/
export const attentUser = data => {
  return axios({
    url: 'attentUser',
    method: 'post',
    data
  })
}

/*取消关注用户*/
export const unAttentUser = params => {
  return axios({
    url: 'unAttentUser',
    method: 'delete',
    params
  })
}