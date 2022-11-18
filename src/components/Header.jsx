import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <div className="logo">
        <span>DIGI</span>
        <span>PPLUS</span>
      </div>
      <ul className="menu">
        <li className="item">Home</li>
        <li className="item">My Jobs</li>
        <li className="item">My Payment</li>
        <li className="item">My Offerletter</li>
        <li className="item">My Certificate</li>
      </ul>
      <div className="others">
        <i class="fa-solid fa-circle-user"></i>
      </div>
    </header>
  )
}

export default Header;