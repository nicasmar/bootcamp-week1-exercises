import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const greeting = () => {

    return (
        <>
            <div>WELCOME TO MY HOMEPAGE!</div>
            <Link to='/TODO'>TODO PAGE</Link>
        </>
    )
}

export default greeting