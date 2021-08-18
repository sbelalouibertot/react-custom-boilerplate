import React from 'react'
import emptyLogo from '../../../public/assets/empty-logo.png'

const Header = () => (
    <header>
        <div className='left-panel'>
            <img className='app-logo' src={emptyLogo} />
        </div>
        <div className='right-panel'></div>
    </header>
)

export default Header
