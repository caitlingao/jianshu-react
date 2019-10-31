import * as constants from './constants'

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const login = (account, password) => ({
    type: constants.LOGIN,
    account,
    password
})

export const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})
