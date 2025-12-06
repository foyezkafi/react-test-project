import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
  <>
  <nav className='py-3 bg-yellow-500 flex justify-center gap-5'>

    <Link to="/">Home</Link>
    <Link to="/About">About</Link>

  </nav>
  </>
  )
}

export default Navbar
