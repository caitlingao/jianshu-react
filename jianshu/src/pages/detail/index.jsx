import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actions } from './redux'

import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
    componentDidMount() {
        this.props.getDetailInfo(this.props.match.params.id)
    }
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper>
        )
    }
}

const mapStateToProps = state => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = dispatch => ({
    getDetailInfo(id) {
        dispatch(actions.getDetailInfo(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Detail))
