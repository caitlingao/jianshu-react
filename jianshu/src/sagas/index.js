// import headerSaga from './headerSaga'
import headerSaga from './header/index'
import homeSaga from '../pages/home/sagas'
import detailSaga from '../pages/detail/sagas'
import loginSaga from '../pages/login/sagas'

const saga = [headerSaga, homeSaga, detailSaga, loginSaga]

export default saga
