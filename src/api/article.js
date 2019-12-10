import axios from 'axios'
import {serverUrl} from '../utils/env.js'

axios.defaults.baseURL = 'serverUrl' + '/CoderSite/article/'

/*获取10个最新文章*/
export const getNewArticles = params => {
  return axios({
    url: 'getNewArticles',
    method: 'get',
    params
  })
}

/*获取10个热门文章*/
export const getHotArticles = params => {
  return axios({
    url: 'getHotArticles',
    method: 'get',
    params
  })
}

/*获取10个推荐给用户的文章*/
export const getRecommendArticles = params => {
  return axios({
    url: 'getRecommendArticles',
    method: 'get',
    params
  })
}

/*获取某用户的关注人发表的10个最新文章*/
export const getFollowsArticles = params => {
  return axios({
    url: 'getFollowsArticles',
    method: 'get',
    params
  })
}

/*通过标签查询10个文章*/
export const getArticlesByLabels = params => {
  return axios({
    url: 'getArticlesByLabels',
    method: 'get',
    params
  })
}

/*通过关键词搜索10个文章*/
export const getArticlesByKeywords = params => {
  return axios({
    url: 'getArticlesByKeywords',
    method: 'get',
    params
  })
}

/* 通过用户id搜索该用户发表的10个文章*/
export const getArticlesByKeywords = params => {
  return axios({
    url: 'getArticlesByKeywords',
    method: 'get',
    params
  })
}

/*获取某用户收藏的10个文章*/
export const getCollectArticles = params => {
  return axios({
    url: 'getCollectArticles',
    method: 'get',
    params
  })
}

/*通过id查询1个文章*/
export const getArticleById = params => {
  return axios({
    url: 'getArticleById',
    method: 'get',
    params
  })
}

/*发表一篇文章*/
export const addArticle = data => {
  return axios({
    url: 'addArticle',
    method: 'post',
    data
  })
}

/*删除一篇文章*/
export const addArticle = params => {
  return axios({
    url: 'addArticle',
    method: 'delete',
    params
  })
}

/*点赞*/
export const likeArticle = data => {
  return axios({
    url: 'likeArticle',
    method: 'post',
    data
  })
}

/*取消点赞*/
export const unlikeArticle = params => {
  return axios({
    url: 'unlikeArticle',
    method: 'delete',
    params
  })
}

/*收藏*/
export const collectArticle = data => {
  return axios({
    url: 'collectArticle',
    method: 'post',
    data
  })
}

/*取消收藏*/
export const uncollectArticle = params => {
  return axios({
    url: 'uncollectArticle',
    method: 'delete',
    params
  })
}

/*评论*/
export const commentArticle = data => {
  return axios({
    url: 'commentArticle',
    method: 'post',
    data
  })
}

export const uncollectArticle = params => {
  return axios({
    url: 'uncollectArticle',
    method: 'delete',
    params
  })
}