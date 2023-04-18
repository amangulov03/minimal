import React from 'react'
import logo from '../img/IMAGE.png'
import './Header.scss'
const Header = () => {
  return (
    <div className='main_container'>
      <div className="main_menu">
        <div className='logo'>
          <img src={logo}/>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">process</a></li>
            <li><a href="#">projects</a></li>
            <li><a href="#">team</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header