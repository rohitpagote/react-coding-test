import { useState } from "react";
import { useDispatch } from "react-redux";
import { productListActions } from "../store/products-list-slice";

const UpdateProduct = () => {
  const [id, setId] = useState("31");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productListActions.updateProduct({
        id: id.toString(),
        title: title,
        desc: desc,
        price: price
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" value={id} onChange={handleIdChange} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={desc} onChange={handleDescChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={handlePriceChange} />
      </label>
      <br />
      <button>Update</button>
      <br />
    </form>
  );
};

export default UpdateProduct;
