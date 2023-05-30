import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "../store/products-list-slice";

const Products = () => {
  const dispatch = useDispatch();
  const prods = useSelector((state) => state.productList.items);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        data.products.map((prod) => {
          return dispatch(
            productListActions.addProduct({
              id: prod.id.toString(),
              title: prod.title,
              desc: prod.description,
              price: prod.price
            })
          );
        });
      });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(
      productListActions.removeProduct({
        id: id
      })
    );
  };

  return (
    <ul>
      {prods &&
        prods.map((prod) => {
          return (
            <p id={prod.id}>
              <li key={prod.id}>{prod.title}</li>
              <button
                onClick={() => {
                  handleDelete(prod.id);
                }}
              >
                Delete
              </button>
            </p>
          );
        })}
    </ul>
  );
};

export default Products;
