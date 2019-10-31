import { all, put, takeLatest } from 'redux-saga/effects'
import { constants, actions } from '../../redux/header'
import { api, apiConst } from '../../services'

// 这是一个 generator 函数，通过 axios 调用接口获取数据，然后将数据结构创建一个 action，派发给 store，store 再根据 action 派发到 reducer
function* fetchList() {
    try {
        // const res = yield axios.get('/api/headerList.json')
        const res = yield api.fetchHeaderList(apiConst.headerList)
        const action = actions.changeList(res.data.data)
        yield put(action)
    } catch (e) {
        console.log(e)
    }
}

// 这是一个 generator 函数，当函数中接收到的类型是 constants.GET_LIST 时，就会执行 fetchList 函数
function* watchFetchList() {
    yield takeLatest(constants.GET_LIST, fetchList)
}

function* headerSaga() {
    yield all([watchFetchList()])
}

export default headerSaga
