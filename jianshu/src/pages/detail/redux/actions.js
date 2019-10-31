import * as constants from './constants'

export const getDetailInfo = id => ({
    type: constants.GET_DETAIL_INFO,
    id
})

export const changeDetailInfo = data => ({
    type: constants.CHANGE_DETAIL_INFO,
    payload: {
        title: data.title,
        content: data.content
    }
})
