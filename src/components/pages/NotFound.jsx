import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <p>NotFound.<Link to="/">Go back home</Link></p>
        </div>
    )
}

export default NotFound