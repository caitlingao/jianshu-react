import { call, all, put, takeLatest } from 'redux-saga/effects'

import { constants, actions } from '../redux'
import { api, apiConst } from '../../../services'

function* checkLogin(params) {
    try {
        const res = yield call(api.fetchLogin, apiConst.login, {
            query: {
                account: params.account,
                password: params.password
            }
        })
        const action = actions.changeLogin(res.data.data)
        yield put(action)
    } catch (error) {
        console.log(error)
    }
}

function* watchCheckLogin() {
    yield takeLatest(constants.LOGIN, checkLogin)
}

function* loginSaga() {
    yield all([watchCheckLogin()])
}

export default loginSaga
