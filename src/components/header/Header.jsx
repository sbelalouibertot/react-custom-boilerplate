import React from 'react'
import emptyLogo from '../../../public/assets/empty-logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className='app-header'>
        <nav className='left-panel'>
            <Link to='/'>
                <img className='app-logo' src={emptyLogo} />
            </Link>
        </nav>
        <nav className='right-panel'></nav>
    </header>
)

export default Header
