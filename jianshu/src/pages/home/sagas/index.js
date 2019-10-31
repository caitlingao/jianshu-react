import { call, all, put, takeLatest } from 'redux-saga/effects'
import { constants, actions } from '../redux'
import { api, apiConst } from '../../../services'

// 这是一个 generator 函数，通过 axios 调用接口获取数据，然后将数据结构创建一个 action，派发给 store，store 再根据 action 派发到 reducer
function* fetchHomeInfo() {
    try {
        // const res = yield axios.get('/api/headerList.json')
        const res = yield api.fetchHomeInfo(apiConst.homeInfo)
        const action = actions.changeHomeData(res.data.data)
        yield put(action)
    } catch (e) {
        console.log(e)
    }
}

function* fetchMoreList(params) {
    // params is actions.getMoreList() -> { type: "home/get_more_list", payload: {page: 1}}

    try {
        // axios 在 saga 文件中直接使用
        // const res = yield axios.get('/api/headerList.json')

        // axios 移到 api  services 文件中的使用方式
        // const res = yield api.fetchHomeMoreList(apiConst.moreHomeList, {
        //     query: { page: action.payload.page }
        // })

        // axios 移到 api services 文件中后通过 call 调用
        const res = yield call(api.fetchHomeMoreList, apiConst.moreHomeList, {
            query: { page: params.payload.page }
        })
        const action = actions.addArticleList(
            res.data.data,
            params.payload.page + 1
        )
        yield put(action)
    } catch (e) {
        console.log(e)
    }
}

// 这是一个 generator 函数，当函数中接收到的类型是 constants.GET_LIST 时，就会执行 fetchList 函数
function* watchFetchHomeInfo() {
    yield takeLatest(constants.GET_HOME_INFO, fetchHomeInfo)
}

function* watchAddArticleList() {
    yield takeLatest(constants.GET_MORE_LIST, fetchMoreList)
}

function* homeSaga() {
    yield all([watchFetchHomeInfo(), watchAddArticleList()])
}

export default homeSaga
