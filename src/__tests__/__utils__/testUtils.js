import React from 'react'
import { render } from 'react-dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../../redux/reducers/rootReducer'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

export const getMockedStore = (initialState) => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    return mockStore(initialState)
}

export const getRealStore = (initialState) => {
    const middleware = [thunk]
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))
    return store
}

export const customRender = (
    children,
    container,
    initialState,
    { customState = {}, useRealStore = false, history } = {}
) => {
    const state = { ...initialState, ...customState }
    render(
        <Provider store={useRealStore ? getRealStore(state) : getMockedStore(state)}>
            <Router history={history ?? createMemoryHistory()}>{children}</Router>
        </Provider>,
        container
    )
}
