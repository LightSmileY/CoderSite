import axios from 'axios'
import {serverUrl} from '@/config/utils.js'

const userBaseURL = serverUrl + '/CoderSite/user/'

/*注册*/
export const login = params => {
  return axios({
    url: userBaseURL + 'login',
    method: 'post',
    params
  })
}

/*登录*/
export const register = data => {
  return axios({
    url: userBaseURL + 'register',
    method: 'post',
    data
  })
}

/*获取用户资料*/
export const getUserById = params => {
  return axios({
    url: userBaseURL + 'getUserById',
    method: 'get',
    params
  })
}

export const getUserInfo = params => {
  return axios({
    url: userBaseURL + 'getUserInfo',
    method: 'get',
    params
  })
}

/*修改用户资料*/
export const updateUserInfo = data => {
  return axios({
    url: userBaseURL + 'updateUserInfo',
    method: 'post',
    data
  })
}

/*获取某用户的所有粉丝*/
export const getAllFans = params => {
  return axios({
    url: userBaseURL + 'getAllFans',
    method: 'get',
    params
  })
}

/*获取用户的所有关注*/
export const getAllFollows = params => {
  return axios({
    url: userBaseURL + 'getAllFollows',
    method: 'get',
    params
  })
}

/*关注用户*/
export const addFollow = params => {
  return axios({
    url: userBaseURL + 'addFollow',
    method: 'post',
    params
  })
}

/*取消关注用户*/
export const deleteFollow = params => {
  return axios({
    url: userBaseURL + 'deleteFollow',
    method: 'delete',
    params
  })
}