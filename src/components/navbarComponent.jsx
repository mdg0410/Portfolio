import React, { useState, useEffect } from 'react';
import Sidebar from './sidebarComponent';
import styles from '../styles/portfolio.module.css';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.toolbar}>
      <div className={styles.logo}>
        <a href="/home">
          <span className={styles.myLogo}>My Logo</span>
        </a>
      </div>
      {windowWidth > 768 ? (
        <MenuList />
      ) : (
        <Sidebar />
      )}

    </nav>
  );
};

const MenuList = () => (
  <ul className={styles.menuList}>
    <li>
      <a href="#Works">Works</a>
    </li>
    <li>
      <a href="#About">About</a>
    </li>
    <li>
      <a href="#Contact">Contact</a>
    </li>
  </ul>
);

export default Navbar;
