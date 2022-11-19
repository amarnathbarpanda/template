import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [hamMenu, setHamMenu] = useState(false);
  return (
    <header className='Header'>
      <div className="logo">
        <span>DIGI</span>
        <span>PPLUS</span>
      </div>
      <ul className="menu">
        <NavLink to='/'><li className="item">Home</li></NavLink>
        <NavLink to='/jobs'><li className="item">My Jobs</li></NavLink>
        <NavLink to='/payment'><li className="item">My Payment</li></NavLink>
        <NavLink to='/offerletter'><li className="item">My Offerletter</li></NavLink>
        <NavLink to='/certificate'><li className="item">My Certificate</li></NavLink>
      </ul>
      <div className="others">
        <i className="fa-solid fa-circle-user"></i>
      </div>
      <div id="hamburger__menu">
        <div id="ham__menu__icon" className={hamMenu ? 'icon' : ''} onClick={() => setHamMenu(!hamMenu)}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <ul className={hamMenu ? 'ham__nav show' : 'ham__nav hide'} id="ham__nav">
          <li>
            <NavLink to='/' onClick={() => setHamMenu(!hamMenu)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/jobs' onClick={() => setHamMenu(!hamMenu)}>
              My Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to='/payment' onClick={() => setHamMenu(!hamMenu)}>
              My Payment
            </NavLink>
          </li>
          <li>
            <NavLink to='/offerletter' onClick={() => setHamMenu(!hamMenu)}>
              My Offerletter
            </NavLink>
          </li>
          <li>
            <NavLink to='/certificate' onClick={() => setHamMenu(!hamMenu)}>
              My Certificate
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;