import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, selectSidebarState } from '../redux/slices/sidebarSlice';
import Sidebar from './SidebarComponent';
import '../styles/navbar.css';

const MenuList = () => (
  <ul className="menu-list" id="list-menu">
    <li className="link">
      <a href="#Works">Works</a>
    </li>
    <li className="link">
      <a href="#About">About</a>
    </li>
    <li className="link">
      <a href="#Contact">Contact</a>
    </li>
  </ul>
);

const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(selectSidebarState);
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
    <nav className="toolbar">
      <div className="logo">
        <a href="/home">
          <span className="my-logo">My Logo</span>
        </a>
      </div>
      {windowWidth > 768 ? (
        <MenuList />
      ) : (
        <Sidebar/>
      )}
      
      
    </nav>
  );
};

export default Navbar;
