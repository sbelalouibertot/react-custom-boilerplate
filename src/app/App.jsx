import React from 'react'
import './App.scss'
import HeaderContainer from '../components/header/HeaderContainer'
import ContentContainer from '../components/content/ContentContainer'

const App = () => (
    <div className='app'>
        <HeaderContainer />
        <ContentContainer />
    </div>
)

export default App
