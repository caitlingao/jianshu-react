import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { actions } from './redux'

import { LoginWrapper, LoginBox, Input, Button } from './style'

class Login extends Component {
    render() {
        const { loginStatus, login } = this.props
        return !loginStatus ? (
            <LoginWrapper>
                <LoginBox>
                    <Input
                        placeholder="账号"
                        innerRef={input => {
                            this.account = input
                        }}
                    />
                    <Input
                        placeholder="密码"
                        type="password"
                        innerRef={input => {
                            this.password = input
                        }}
                    />
                    <Button onClick={() => login(3, 3)}>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        ) : (
            <Redirect to="/" />
        )
    }
}

const mapStateToProps = state => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = dispatch => ({
    login(account, password) {
        console.log('-------------')
        console.log(account)
        dispatch(actions.login(account.value, password.value))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
