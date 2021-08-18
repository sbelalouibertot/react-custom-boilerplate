import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { customRender } from '../__utils__/testUtils'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../../App/App'
import AppContainer from '../../App/AppContainer'

let container = null
const initialState = {}

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
    jest.clearAllMocks()
})

test('renders component without crashing', () => {
    act(() => {
        customRender(
            <Router>
                <AppContainer />
            </Router>,
            container,
            initialState
        )
    })
    const appElement = container.querySelector('.app')
    expect(appElement).not.toBeNull()
})

test('renders component without crashing', () => {
    act(() => {
        customRender(<App />, container, initialState)
    })
    const appElement = container.querySelector('.app')
    expect(appElement).not.toBeNull()
})
