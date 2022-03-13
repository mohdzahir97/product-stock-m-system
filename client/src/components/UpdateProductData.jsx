import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

const UpdateProductData = () => {
  useEffect(() => {
    getSingleData();
  }, []);

  // const [product, setproduct] = useState([]);

  const [stateProduct, setstateProduct] = useState({
    stockname: "",
    stockid: "",
    category: "",
    price: "",
    totalstock: "",
  });

  const { id } = useParams();
  const Navigate = useNavigate();

  const getSingleData = async () => {
    try {
      const response = await axios.get(`/product/${id}`);
      if (response.data.success) {
        setstateProduct({
          ...stateProduct,
          stockname: response.data.exitsData.stockname,
          stockid: response.data.exitsData.stockid,
          category: response.data.exitsData.category,
          price: response.data.exitsData.price,
          totalstock: response.data.exitsData.totalstock,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    try {
      setstateProduct({ ...stateProduct, [e.target.name]: e.target.value });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e) => {
    const { stockname, stockid, category, price, totalstock } = stateProduct;

    if (!stockname || !stockid || !category || !price || !totalstock) {
      alert("Please Filled All Field...");
    } else {
      e.preventDefault();
      try {
        const response = await axios.put(`/product/${id}`, { stateProduct });
        if (response.data.success) {
          Navigate("/getallproduct");
        }
        console.log("clicked...");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="row text-center mt-5">
      <h1>Edit Stock</h1>
      <form action="">
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
            <EditIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductData;

// const UpdateProductData = () => {
//   useEffect(() => {
//     getSingleData();
//   }, []);

//   const [product, setproduct] = useState([]);

//   const { id } = useParams();
//   console.log(id);

//   const getSingleData = async () => {
//     try {
//       const response = await axios.get(`/product/${id}`);
//       if (response.data.success) {
//         setproduct(response.data.exitsData);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>UpdateProductData</h1>
//     </div>
//   );
// };

// export default UpdateProductData;
