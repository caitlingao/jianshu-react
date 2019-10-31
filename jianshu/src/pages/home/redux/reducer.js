import { fromJS } from 'immutable'

import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_INFO:
            return state.merge({
                topicList: fromJS(action.payload.topicList),
                articleList: fromJS(action.payload.articleList),
                recommendList: fromJS(action.payload.recommendList)
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state
                    .get('articleList')
                    .concat(fromJS(action.list)),
                articlePage: action.nextPage
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state
    }
}
