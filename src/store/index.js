import { configureStore } from "@reduxjs/toolkit";
import AddProductSlice from "./add-product-slice";
import UpdateProductSlice from "./update-product-slice";
import ProductListSlice from "./products-list-slice";

const store = configureStore({
  reducer: {
    addProduct: AddProductSlice.reducer,
    updateProduct: UpdateProductSlice.reducer,
    productList: ProductListSlice.reducer
  }
});

export default store;
