import React from 'react'
import {FaDice} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaDice className='icon' />
                <h1> Crypto <span className='purple'>Analyst</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
