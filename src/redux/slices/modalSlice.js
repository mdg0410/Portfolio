import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    project: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.project = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.project = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state) => state.modal;
export default modalSlice.reducer;
