import axios from 'axios'
import {serverUrl} from '@/config/utils.js'

const questionBaseURL = serverUrl + '/CoderSite/question/'

/*获取10个最新问题*/
export const getNewQuestions = params => {
  return axios({
    url: questionBaseURL + 'getNewQuestions',
    method: 'get',
    params
  })
}

/*获取10个热门问题*/
export const getHotQuestions = params => {
  return axios({
    url: questionBaseURL + 'getHotQuestions',
    method: 'get',
    params
  })
}

/*获取10个推荐给用户的问题*/
export const getRecommendQuestions = params => {
  return axios({
    url: questionBaseURL + 'getRecommendQuestions',
    method: 'get',
    params
  })
}

/*获取某用户的关注人发表的10个最新问题*/
export const getFollowsQuestions = params => {
  return axios({
    url: questionBaseURL + 'getFollowsQuestions',
    method: 'get',
    params
  })
}

/*通过标签查询10个问题*/
export const getQuestionsByLabels = params => {
  return axios({
    url: questionBaseURL + 'getQuestionsByLabels',
    method: 'get',
    params
  })
}

/*通过关键词搜索10个问题*/
export const getQuestionsByKeywords = params => {
  return axios({
    url: questionBaseURL + 'getQuestionsByKeywords',
    method: 'get',
    params
  })
}

/* 通过用户id搜索该用户发表的10个问题*/
export const getQuestionsByUserId = params => {
  return axios({
    url: questionBaseURL + 'getQuestionsByUserId',
    method: 'get',
    params
  })
}

/*获取某用户收藏的10个问题*/
export const getCollectQuestions = params => {
  return axios({
    url: questionBaseURL + 'getCollectQuestions',
    method: 'get',
    params
  })
}

/*通过id查询1个问题*/
export const getQuestionById = params => {
  return axios({
    url: questionBaseURL + 'getQuestionById',
    method: 'get',
    params
  })
}

/*发表一篇问题*/
export const addQuestion = data => {
  return axios({
    url: questionBaseURL + 'addQuestion',
    method: 'post',
    data
  })
}

/*删除一篇问题*/
export const deleteQuestionById = params => {
  return axios({
    url: questionBaseURL + 'deleteQuestionById',
    method: 'delete',
    params
  })
}

/*点赞*/
export const addLike = data => {
  return axios({
    url: questionBaseURL + 'addLike',
    method: 'post',
    data
  })
}

/*取消点赞*/
export const deleteLike = params => {
  return axios({
    url: questionBaseURL + 'deleteLike',
    method: 'delete',
    params
  })
}

/*收藏*/
export const addFavorite = data => {
  return axios({
    url: questionBaseURL + 'addFavorite',
    method: 'post',
    data
  })
}

/*取消收藏*/
export const deleteFavorite = params => {
  return axios({
    url: questionBaseURL + 'deleteFavorite',
    method: 'delete',
    params
  })
}

/*评论*/
export const addAnswer = data => {
  return axios({
    url: questionBaseURL + 'addAnswer',
    method: 'post',
    data
  })
}

export const deleteAnswer = params => {
  return axios({
    url: questionBaseURL + 'deleteAnswer',
    method: 'delete',
    params
  })
}