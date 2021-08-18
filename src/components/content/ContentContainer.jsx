import React, { useState } from 'react'
import Content from './Content'

const ContentContainer = () => {
    const data = useState({})
    const isLoading = useState(false)

    return <Content {...{ data, isLoading }} />
}

export default ContentContainer
