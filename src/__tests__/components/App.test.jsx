import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { customRender } from '../__utils__/testUtils'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../../app/App'
import AppContainer from '../../app/AppContainer'

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

const render = (component, options = {}) => customRender(component, container, initialState, options)

test('renders component without crashing', () => {
    act(() => {
        render(
            <Router>
                <AppContainer />
            </Router>
        )
    })
    const appElement = container.querySelector('.app')
    expect(appElement).not.toBeNull()
})

test('renders component without crashing', () => {
    act(() => {
        render(<App />)
    })
    const appElement = container.querySelector('.app')
    expect(appElement).not.toBeNull()
})
