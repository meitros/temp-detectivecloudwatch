import React, { useState } from 'react';
import Link from 'next/link';
import { ReactComponent as DLogo } from '../logdetectiveLogo-02-01.svg';
import { Button } from './Button';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="logo" onClick={closeMobileMenu}>
            <DLogo height={150} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Analyze Charts</Button>} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
