import { createSlice } from "@reduxjs/toolkit";

const ProductListSlice = createSlice({
  name: "addProduct",
  initialState: {
    items: []
  },
  reducers: {
    addProduct(state, action) {
      const newItem = action.payload;
      console.log("newItem");
      console.log(newItem);

      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(existingItem);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          desc: newItem.desc,
          price: newItem.price
        });
      }
    },

    removeProduct(state, action) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    },

    updateProduct(state, action) {
      const id = action.payload.id;
      let index = -1;
      state.items.map((item, idx) => {
        if (id === item.id) {
          index = idx;
        }
      });
      console.log(id);
      console.log(index);

      state.items[index] = {
        id: id,
        title: action.payload.title,
        desc: action.payload.desc,
        price: action.payload.price
      };
    }
  }
});

export const productListActions = ProductListSlice.actions;
export default ProductListSlice;
