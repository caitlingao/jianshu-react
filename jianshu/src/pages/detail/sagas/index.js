import { call, all, put, takeLatest } from 'redux-saga/effects'

import { constants, actions } from '../redux'
import { api, apiConst } from '../../../services'

function* fetchDetailInfo(params) {
    try {
        const res = yield call(api.fetchDetailInfo, apiConst.detailInfo, {
            query: { id: params.id }
        })
        const action = actions.changeDetailInfo(res.data.data)
        yield put(action)
    } catch (e) {
        console.log(e)
    }
}

function* watchGetDetailInfo() {
    yield takeLatest(constants.GET_DETAIL_INFO, fetchDetailInfo)
}

function* detailSaga() {
    yield all([watchGetDetailInfo()])
}

export default detailSaga
