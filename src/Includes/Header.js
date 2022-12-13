import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <Link to="/" className="logo">Blogs</Link>
    </header>
)

export default Header