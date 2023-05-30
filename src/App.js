import React from "react";
import Products from "./components/Products";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addProductActions } from "./store/add-product-slice";
import { updateProductActions } from "./store/update-product-slice";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

export default function App() {
  const showAddProductBtn = useSelector(
    (state) => state.addProduct.isAddProductVisible
  );
  const showUpdateProductBtn = useSelector(
    (state) => state.updateProduct.isUpdateProductVisible
  );
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(addProductActions.toggleAddProduct());
  };
  const updateProductHandler = () => {
    dispatch(updateProductActions.toggleUpdateProduct());
  };

  return (
    <React.Fragment>
      <Products />
      <br />
      <button onClick={addProductHandler}>Add Product</button>
      <br />
      {showAddProductBtn && <AddProduct />}
      <br />
      <button onClick={updateProductHandler}>Update Product</button>
      <br />
      {showUpdateProductBtn && <UpdateProduct />}
    </React.Fragment>
  );
}
