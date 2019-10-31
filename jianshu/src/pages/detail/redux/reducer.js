import { fromJS } from 'immutable'

import * as constants from './constants'

const defaultState = fromJS({
    title: '',
    content: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL_INFO:
            return state.merge({
                title: fromJS(action.payload.title),
                content: fromJS(action.payload.content)
            })
        default:
            return state
    }
}
