import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './slices/navbarSlice';
import sidebarReducer from './slices/sidebarSlice';
import worksReducer from './slices/worksSlice';
import modalReducer from './slices/modalSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    sidebar: sidebarReducer,
    works: worksReducer,
    modal: modalReducer,
  },
});

export default store;
