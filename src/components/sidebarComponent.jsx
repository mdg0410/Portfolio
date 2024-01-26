import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, selectSidebarState } from '../redux/slices/sidebarSlice';
import styles from '../styles/portfolio.module.css';

const SidebarComponent = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(selectSidebarState);

  return (
    <>
      {!isSidebarOpen ? (
        <button className={styles.menuButton} type="button" onClick={() => dispatch(toggleSidebar())}>
          Menú
        </button>
      ) : (
        <div className={styles.sidebar}>
          <div className={styles.closeContainer}>
            <button className={styles.closeButton} type="button" onClick={() => dispatch(toggleSidebar())}>
              X
            </button>
          </div>
          <ul>
            <li><a href="#Works" onClick={() => dispatch(toggleSidebar())}>Works</a></li>
            <li><a href="#About" onClick={() => dispatch(toggleSidebar())}>About</a></li>
            <li><a href="#Contact" onClick={() => dispatch(toggleSidebar())}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarComponent;
