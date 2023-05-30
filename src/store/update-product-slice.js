import { createSlice } from "@reduxjs/toolkit";

const UpdateProductSlice = createSlice({
  name: "updateProduct",
  initialState: {
    isUpdateProductVisible: false
  },
  reducers: {
    toggleUpdateProduct(state, action) {
      state.isUpdateProductVisible = !state.isUpdateProductVisible;
    }
  }
});

export const updateProductActions = UpdateProductSlice.actions;
export default UpdateProductSlice;
