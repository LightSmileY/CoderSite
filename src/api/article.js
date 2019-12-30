import axios from 'axios'
import {serverUrl} from '@/config/utils.js'

const articleBaseURL = serverUrl + '/CoderSite/article/'

/*获取所有文章*/
export const getAllArticles = () => {
  return axios({
    url: articleBaseURL + 'getAllArticles',
    method: 'get'
  })
}

/*获取10个最新文章*/
export const getNewArticles = params => {
  return axios({
    url: articleBaseURL + 'getNewArticles',
    method: 'get',
    params
  })
}

/*获取10个热门文章*/
export const getHotArticles = params => {
  return axios({
    url: articleBaseURL + 'getHotArticles',
    method: 'get',
    params
  })
}

/*获取10个推荐给用户的文章*/
export const getRecommendArticles = params => {
  return axios({
    url: articleBaseURL + 'getRecommendArticles',
    method: 'get',
    params
  })
}

/*获取某用户的关注人发表的10个最新文章*/
export const getFollowsArticles = params => {
  return axios({
    url: articleBaseURL + 'getFollowsArticles',
    method: 'get',
    params
  })
}

/*通过标签查询10个文章*/
export const getArticlesByLabels = params => {
  return axios({
    url: articleBaseURL + 'getArticlesByLabels',
    method: 'get',
    params
  })
}

/*通过关键词搜索10个文章*/
export const getArticlesByKeywords = params => {
  return axios({
    url: articleBaseURL + 'getArticlesByKeywords',
    method: 'get',
    params
  })
}

/* 通过用户id搜索该用户发表的10个文章*/
export const getUserNewestPM = params => {
  return axios({
    url: articleBaseURL + 'getUserNewestPM',
    method: 'get',
    params
  })
}

/*获取某用户收藏的10个文章*/
export const getCollectArticles = params => {
  return axios({
    url: articleBaseURL + 'getCollectArticles',
    method: 'get',
    params
  })
}

/*通过id查询1个文章*/
export const getArticleById = params => {
  return axios({
    url: articleBaseURL + 'getArticleById',
    method: 'get',
    params
  })
}

/*发表一篇文章*/
export const addArticle = data => {
  return axios({
    url: articleBaseURL + 'addArticle',
    method: 'post',
    data
  })
}

/*删除一篇文章*/
export const deleteArticleById = params => {
  return axios({
    url: articleBaseURL + 'deleteArticleById',
    method: 'delete',
    params
  })
}

/*点赞*/
export const addLike = params => {
  return axios({
    url: articleBaseURL + 'addLike',
    method: 'post',
    params
  })
}

/*取消点赞*/
export const deleteLike = params => {
  return axios({
    url: articleBaseURL + 'deleteLike',
    method: 'delete',
    params
  })
}

/*收藏*/
export const addFavorite = data => {
  return axios({
    url: articleBaseURL + 'addFavorite',
    method: 'post',
    data
  })
}

/*取消收藏*/
export const deleteFavorite = params => {
  return axios({
    url: articleBaseURL + 'deleteFavorite',
    method: 'delete',
    params
  })
}

/*评论*/
export const addComment = data => {
  return axios({
    url: articleBaseURL + 'addComment',
    method: 'post',
    data
  })
}

export const deleteComment = params => {
  return axios({
    url: articleBaseURL + 'deleteComment',
    method: 'delete',
    params
  })
}