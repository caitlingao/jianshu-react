import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { actions } from '../../redux/header'
import { actions as loginActions } from '../../pages/login/redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'

class Header extends Component {
    getListArea = () => {
        const {
            focused,
            list,
            page,
            totalPage,
            mouseIn,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props

        const newList = list.toJS()
        const pageList = []

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>
                        {newList[i]}
                    </SearchInfoItem>
                )
            }
        }

        return focused || mouseIn ? (
            <SearchInfo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                        onClick={() =>
                            handleChangePage(page, totalPage, this.spinIcon)
                        }
                    >
                        <i
                            ref={icon => {
                                this.spinIcon = icon
                            }}
                            className="iconfont spin"
                        >
                            &#xe851;
                        </i>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>{pageList}</SearchInfoList>
            </SearchInfo>
        ) : null
    }
    render() {
        const {
            focused,
            handleInputFocus,
            handleInputBlur,
            list,
            login,
            logout
        } = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {login ? (
                        <NavItem onClick={logout} className="right">
                            退出
                        </NavItem>
                    ) : (
                        <Link to="/login">
                            <NavItem className="right">登陆</NavItem>
                        </Link>
                    )}
                    <NavItem className="right">Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={
                                focused
                                    ? 'focused iconfont zoom'
                                    : 'iconfont zoom'
                            }
                        >
                            &#xe614;
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus(list) {
            list.size === 0 && dispatch(actions.getList())
            dispatch(actions.searchFocus())
        },
        handleInputBlur() {
            dispatch(actions.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actions.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actions.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/gi, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'

            if (page < totalPage) {
                dispatch(actions.changePage(page + 1))
            } else {
                dispatch(actions.changePage(1))
            }
        },
        logout() {
            dispatch(loginActions.logout())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
