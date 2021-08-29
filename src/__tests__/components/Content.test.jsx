import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { customRender } from '../__utils__/testUtils'

import Content from '../../components/content/Content'
import ContentContainer from '../../components/content/ContentContainer'

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
        render(<ContentContainer />)
    })
    const contentWrapperElement = container.querySelector('.content-wrapper')
    expect(contentWrapperElement).not.toBeNull()
})

test('renders component without crashing', () => {
    act(() => {
        render(<Content />)
    })
    const contentWrapperElement = container.querySelector('.content-wrapper')
    expect(contentWrapperElement).not.toBeNull()
})

test('should not display content during loading', () => {
    act(() => {
        render(<Content isLoading={true} />)
    })
    const contentWrapperElement = container.querySelector('.content-wrapper')
    const contentElement = container.querySelector('.content-wrapper .content')

    expect(contentElement).toBeNull()
    expect(contentWrapperElement.querySelector('p').textContent).toBe('Loading')
})

test('should not display content if no data', () => {
    act(() => {
        render(<Content />)
    })
    const contentWrapperElement = container.querySelector('.content-wrapper')
    const contentElement = container.querySelector('.content-wrapper .content')

    expect(contentElement).toBeNull()
    expect(contentWrapperElement.querySelector('p').textContent).toBe('No data')
})

test('should display content if data and not loading', () => {
    act(() => {
        render(<Content isLoading={false} data={{ a: 1 }} />)
    })
    const contentElement = container.querySelector('.content-wrapper .content')

    expect(contentElement).not.toBeNull()
})
