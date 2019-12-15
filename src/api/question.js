import axios from 'axios'
import {serverUrl} from '@/config/utils.js'

axios.defaults.baseURL = serverUrl + '/CoderSite/question/'

/*获取10个最新问题*/
export const getNewQuestions = params => {
  return axios({
    url: 'getNewQuestions',
    method: 'get',
    params
  })
}

/*获取10个热门问题*/
export const getHotQuestions = params => {
  return axios({
    url: 'getHotQuestions',
    method: 'get',
    params
  })
}

/*获取10个推荐给用户的问题*/
export const getRecommendQuestions = params => {
  return axios({
    url: 'getRecommendQuestions',
    method: 'get',
    params
  })
}

/*获取某用户的关注人发表的10个最新问题*/
export const getFollowsQuestions = params => {
  return axios({
    url: 'getFollowsQuestions',
    method: 'get',
    params
  })
}

/*通过标签查询10个问题*/
export const getQuestionsByLabels = params => {
  return axios({
    url: 'getQuestionsByLabels',
    method: 'get',
    params
  })
}

/*通过关键词搜索10个问题*/
export const getQuestionsByKeywords = params => {
  return axios({
    url: 'getQuestionsByKeywords',
    method: 'get',
    params
  })
}

/* 通过用户id搜索该用户发表的10个问题*/
export const getQuestionsByUserId = params => {
  return axios({
    url: 'getQuestionsByUserId',
    method: 'get',
    params
  })
}

/*获取某用户收藏的10个问题*/
export const getCollectQuestions = params => {
  return axios({
    url: 'getCollectQuestions',
    method: 'get',
    params
  })
}

/*通过id查询1个问题*/
export const getQuestionById = params => {
  return axios({
    url: 'getQuestionById',
    method: 'get',
    params
  })
}

/*发表一篇问题*/
export const addQuestion = data => {
  return axios({
    url: 'addQuestion',
    method: 'post',
    data
  })
}

/*删除一篇问题*/
export const deleteQuestionById = params => {
  return axios({
    url: 'deleteQuestionById',
    method: 'delete',
    params
  })
}

/*点赞*/
export const likeQuestion = data => {
  return axios({
    url: 'likeQuestion',
    method: 'post',
    data
  })
}

/*取消点赞*/
export const unlikeQuestion = params => {
  return axios({
    url: 'unlikeQuestion',
    method: 'delete',
    params
  })
}

/*收藏*/
export const collectQuestion = data => {
  return axios({
    url: 'collectQuestion',
    method: 'post',
    data
  })
}

/*取消收藏*/
export const uncollectQuestion = params => {
  return axios({
    url: 'uncollectQuestion',
    method: 'delete',
    params
  })
}

/*评论*/
export const answerQuestion = data => {
  return axios({
    url: 'answerQuestion',
    method: 'post',
    data
  })
}

export const deleteAnswer = params => {
  return axios({
    url: 'deleteAnswer',
    method: 'delete',
    params
  })
}