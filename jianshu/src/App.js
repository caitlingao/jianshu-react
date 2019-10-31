import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
import Header from './components/header'
import Login from './pages/login'
import Home from './pages/home'
import Write from './pages/write'
import Detail from './pages/detail/loadable'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <Header />
                        <Fragment>
                            <Route path="/" exact component={Home}></Route>
                            <Route
                                path="/login"
                                exact
                                component={Login}
                            ></Route>
                            <Route
                                path="/write"
                                exact
                                component={Write}
                            ></Route>
                            <Route
                                path="/detail/:id"
                                exact
                                component={Detail}
                            ></Route>
                        </Fragment>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
    }
}

export default App
