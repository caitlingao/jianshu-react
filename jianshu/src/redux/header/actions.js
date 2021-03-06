import * as constants from './constants'

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const getList = () => ({
    type: constants.GET_LIST
})

// export const getList = () => {
//     return dispatch => {
//         axios
//             .get('/api/headerList.json')
//             .then(res => {
//                 const data = res.data
//                 dispatch(_changeList(data.data))
//             })
//             .catch(() => {
//                 console.log('error')
//             })
//     }
// }

export const changeList = data => ({
    type: constants.CHANGE_LIST,
    payload: {
        data: data,
        totalPage: Math.ceil(data.length / 10)
    }
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = page => ({
    type: constants.CHANGE_PAGE,
    page
})
