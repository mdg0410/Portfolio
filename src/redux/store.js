import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './slices/navbarSlice';
import sidebarReducer from './slices/sidebarSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
