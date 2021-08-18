import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import AppContainer from './app/AppContainer'

import { Provider } from 'react-redux'
import store from './redux/store'

import { BrowserRouter as Router, Switch } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <AppContainer />
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
