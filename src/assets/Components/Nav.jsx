import React from 'react'
// import Logo from '..assets/TsukidenLogo.png'

const Nav = () => {
  return (
    <div className='nav-container'>
    {/* for representation only 1/11/24*/}
    <div className='nav-items'>
    {/* <img src={Logo}alt='tsukidenlogo'/> */}
    <li>Catalog</li>
    <li>Activities</li>
    </div>
    <div className="nav-buttons">
    <button>Login</button>
    <button>Sign Up</button>
    </div>
    </div>
  )
}

export default Nav