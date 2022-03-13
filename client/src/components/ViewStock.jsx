import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink, Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ViewStock = () => {
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
    did: "",
  });

  const { id } = useParams();
  const Navigate = useNavigate();

  const getSingleData = async () => {
    try {
      const response = await axios.get(`/product/${id}`);
      if (response.data.success) {
        setstateProduct({
          ...stateProduct,
          did: response.data.exitsData._id,
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
      <h1>View Stock  {" "}
        <Link to={`/updateproduct/${stateProduct.did}`}>
          <EditIcon />
        </Link>

        <Link
          to={`/deleteproduct/${stateProduct.did}`}
          className="text-danger"
        >
          <DeleteIcon />{" "}
        </Link>
      </h1>

      <table className="col-sm-3 offset-4 fs-3">
        <tr>
          <td>Stock Name:</td>
          <td> {stateProduct.stockname}</td>
        </tr>

        <tr>
          <td>Stock Number:</td>
          <td> {stateProduct.stockid}</td>
        </tr>

        <tr>
          <td>Stock Category:</td>
          <td> {stateProduct.category}</td>
        </tr>

        <tr>
          <td>Stock Price: </td>
          <td> {stateProduct.price}</td>
        </tr>

        <tr>
          <td>Stock Total :</td>
          <td> {stateProduct.totalstock}</td>
        </tr>
      </table>
    </div>
  );
};

export default ViewStock;
