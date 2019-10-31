import { combineReducers } from 'redux-immutable'

import { reducer as headerReducer } from '../redux/header'
import { reducer as homeReducer } from '../pages/home/redux'
import { reducer as detailReducer } from '../pages/detail/redux'
import { reducer as loginReducer } from '../pages/login/redux'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer
