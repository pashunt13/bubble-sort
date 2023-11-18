import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: Array.from(Array(100).keys()),
  currentIndex: -2
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    }
  }
});

export const { setItems, setCurrentIndex } = itemsSlice.actions;
export default itemsSlice.reducer;
