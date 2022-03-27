import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ReactPaginate from "react-paginate";
import { Link, NavLink } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";

const GetAllProductData = () => {
  const [product, setproduct] = useState([]);

  const sortOption = [
    "stockname",
    "stockid",
    "category",
    "price",
    "totalstock",
  ];

  useEffect(() => {
    getAllProductData();
  }, []);

  const handleSorting = async (e) => {
    try {
      const response = await axios.get(`/product/?sorting=${e.target.value}`);
      if (response.data.success) {
        setproduct(response.data.exitsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProductData = async () => {
    try {
      const response = await axios.get("/product");
      if (response.data.success) {
        setproduct(response.data.exitsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchStock = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/product/?keyword=${e.target.value}`);
      if (response.data.success) {
        setproduct(response.data.exitsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    try {
      const response = await axios.get(`/product/?page=${currentPage}`);
      if (response.data.success) {
        setproduct(response.data.exitsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row text-center mt-2">
      <h3>All Stock tData</h3>
      <form action="">
        <div className="col-sm-8 offset-2 mt-2 text-center">
        
                <input
                  type="text"
                  className="form-control text-center offset-3 w-50"
                  placeholder="Enter Product Name for serach stock"
                  onChange={searchStock}
                />
                <input
                  type="reset"
                  className="btn btn-danger offset-8"
                  onClick={() => getAllProductData()}
                />
           

          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">SrNo</th> */}
                <th scope="col">Name</th>
                <th scope="col">Stock Number</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Total Stock</th>
                <th scope="col" colSpan="3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {product.map((val, index) => {
                return (
                  <>
                    <tr>
                      {/* <th scope="row">{index + 1}</th> */}
                      <td>{val.stockname}</td>
                      <td>{val.stockid}</td>
                      <td>{val.category}</td>
                      <td>{val.price}</td>
                      <td>{val.totalstock}</td>

                      <td>
                        <NavLink
                          to={`/viewproduct/${val._id}`}
                          className="text-dark"
                        >
                          <VisibilityIcon />{" "}
                        </NavLink>
                      </td>

                      <td>
                        <NavLink
                          to={`/deleteproduct/${val._id}`}
                          className="text-danger"
                        >
                          <DeleteIcon />{" "}
                        </NavLink>
                      </td>
                      <td>
                        <NavLink to={`/updateproduct/${val._id}`}>
                          <EditIcon />{" "}
                        </NavLink>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-sm-6 offset-3 mt-5">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={100}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>

        <div className="col-sm-4 mt-3">
          <b> Sorting </b>:{" "}
          <select className="w-50" onChange={handleSorting}>
            <option>Select</option>

            {sortOption.map((item, index) => (
              <>
                <option value={item} key={index}>
                  {item}
                </option>
              </>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default GetAllProductData;
