import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    text: '',
    errors: {},
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { updateField, setErrors } = formSlice.actions;
export const selectForm = (state) => state.form;
export default formSlice.reducer;
