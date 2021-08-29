import React from 'react'
import './Content.scss'

const Content = ({ isLoading, data }) => (
    <div className='content-wrapper'>
        {isLoading ? (
            <p>Loading</p>
        ) : (
            <>
                {data ? (
                    <div className='content'>
                        <p>Content</p>
                    </div>
                ) : (
                    <p>No data</p>
                )}
            </>
        )}
    </div>
)

export default Content
