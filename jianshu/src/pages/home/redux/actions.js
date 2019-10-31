import * as constants from './constants'

export const getHomeInfo = () => ({
    type: constants.GET_HOME_INFO
})

export const changeHomeData = data => ({
    type: constants.CHANGE_HOME_INFO,
    payload: {
        topicList: data.topicList,
        articleList: data.articleList,
        recommendList: data.recommendList
    }
})

export const getMoreList = page => ({
    type: constants.GET_MORE_LIST,
    payload: {
        page: page
    }
})

export const addArticleList = (data, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: data,
    nextPage
})

export const toggleTopShow = show => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})
