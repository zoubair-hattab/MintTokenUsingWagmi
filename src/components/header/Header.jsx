import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import token from '../../assets/Token.png';
import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Header = () => {
  const [opneHeader, setOpenHeader] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={token} alt="logo" width={80} height={25} />
        </Link>
        <nav className={`${opneHeader && ' active '} navbar`}>
          <ul className="navbar-list">
            <li>
              <Link to="#" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-action">
          <ConnectButton showBalance={false} />
          <button className={`${opneHeader && ' active '} nav-toggle-btn`}>
            <BiMenu
              size={30}
              color="white"
              onClick={() => setOpenHeader(true)}
              className="default-icon"
            />
            <IoMdClose
              size={30}
              color="white"
              onClick={() => setOpenHeader(false)}
              className="active-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
