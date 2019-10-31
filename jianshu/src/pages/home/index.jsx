import React, { Component } from 'react'
import { connect } from 'react-redux'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import { actions } from './redux'

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'

class Home extends Component {
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    handleScrollTop = () => {
        window.scrollTo(0, 0)
    }

    bindEvents = () => {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-img"
                        src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=""
                    />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? (
                    <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
                ) : null}
            </HomeWrapper>
        )
    }
}

const mapStateToProps = state => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatchToProps = dispatch => ({
    changeHomeData() {
        dispatch(actions.getHomeInfo())
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actions.toggleTopShow(true))
        } else {
            dispatch(actions.toggleTopShow(false))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
