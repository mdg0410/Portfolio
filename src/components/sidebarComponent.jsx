import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, selectSidebarState } from '../redux/slices/sidebarSlice';
import '../styles/sidebar.css';

const SidebarComponent = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(selectSidebarState);

  return (
    <>
      {!isSidebarOpen ? (
        <button type="button" onClick={() => dispatch(toggleSidebar())}>
          Menú
        </button>) : (
        <div className="sidebar">
        <button type="button" onClick={() => dispatch(toggleSidebar())}>
          X
        </button>
        <ul>
          <li><a href="#Works">Works</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        </div>
      )}
    </>
  );
};

export default SidebarComponent;
