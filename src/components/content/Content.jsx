import React from 'react'
import './Content.scss'

const Content = ({ isLoading, data }) => (
    <div className='content-wrapper'>
        {isLoading ? (
            <span>Loading</span>
        ) : (
            <>
                {data ? (
                    <div className='content'>
                        <span>Content</span>
                    </div>
                ) : (
                    <span>No data</span>
                )}
            </>
        )}
    </div>
)

export default Content
