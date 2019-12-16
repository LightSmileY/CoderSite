import axios from 'axios'
import {serverUrl} from '@/config/utils.js'

axios.defaults.baseURL = serverUrl + '/CoderSite/user/'

/*注册*/
export const login = params => {
  return axios({
    url: 'login',
    method: 'post',
    params
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
export const getUserById = params => {
  return axios({
    url: 'getUserById',
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
export const getAllFans = params => {
  return axios({
    url: 'getAllFans',
    method: 'get',
    params
  })
}

/*获取用户的所有关注*/
export const getAllFollows = params => {
  return axios({
    url: 'getAllFollows',
    method: 'get',
    params
  })
}

/*关注用户*/
export const addFollow = data => {
  return axios({
    url: 'addFollow',
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