import { createSlice } from "@reduxjs/toolkit";

const AddProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    isAddProductVisible: false
  },
  reducers: {
    toggleAddProduct(state, action) {
      state.isAddProductVisible = !state.isAddProductVisible;
    }
  }
});

export const addProductActions = AddProductSlice.actions;
export default AddProductSlice;
