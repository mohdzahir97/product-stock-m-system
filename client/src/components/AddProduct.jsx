import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [stateProduct, setstateProduct] = useState({
    stockname: "",
    stockid: "",
    category: "",
    price: "",
    totalstock: "",
  });

  const Navigate = useNavigate();

  const handleInput = (e) => {
    try {
      setstateProduct({ ...stateProduct, [e.target.name]: e.target.value });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { stockname, stockid, category, price, totalstock } = stateProduct;

    if (!stockname || !stockid || !category || !price || !totalstock) {
      alert("Please Filled All Field...");
    } else {
      try {
        const response = await axios.post("/product", { stateProduct });
        if (response.data.success) {
          Navigate("/getallproduct");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="row text-center mt-5">
      <h1>Add Stock</h1>
      <form action="" method="POST">
        <div className="col-sm-8 offset-2 mt-2 text-center">
          <input
            type="text"
            placeholder="Enter The Stock Name"
            name="stockname"
            className="form-control"
            value={stateProduct.stockname}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="col-sm-8 offset-2 mt-2">
          <input
            type="text"
            placeholder="Enter The Stock Id"
            name="stockid"
            className="form-control"
            value={stateProduct.stockid}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="col-sm-8 offset-2 mt-2">
          <input
            type="text"
            placeholder="Enter The Stock Category"
            name="category"
            className="form-control"
            value={stateProduct.category}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="col-sm-8 offset-2 mt-2">
          <input
            type="number"
            placeholder="Enter The Stock Price"
            name="price"
            className="form-control"
            value={stateProduct.price}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="col-sm-8 offset-2 mt-2">
          <input
            type="number"
            placeholder="Enter The Total Stock"
            name="totalstock"
            className="form-control"
            value={stateProduct.totalstock}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="col-sm-8 offset-2 mt-2">
          <button
            onClick={(e) => onSubmit(e)}
            className="form-control btn btn-outline-success"
          >
            <AddIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
