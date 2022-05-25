import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ toggleModal }) => {
  return (
    <div className="container">
    <div className='header'>
      <Link to='/'><h1 className='header-title'>Countdown</h1></Link>
      <button className='create-btn' onClick={toggleModal}>Ny Event</button>
    </div>
  </div>
  )
}

export default Header