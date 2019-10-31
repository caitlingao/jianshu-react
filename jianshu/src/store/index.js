import { createStore, compose, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import saga from '../sagas'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
// create store
const store = createStore(reducer, enhancer)
// run saga
// store.runSaga = sagaMiddleware.run
// const ROOTSAGA = saga
// ROOTSAGA.map(item => store.runSaga(item))
// sagaMiddleware.run(rootSaga)

saga.map(item => sagaMiddleware.run(item))

export default store
