import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'

const AppContainer = () => {
    return (
        <Route path='/'>
            <App />
        </Route>
    )
}

export default AppContainer
