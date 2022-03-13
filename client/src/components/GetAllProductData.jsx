import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

import {Link,NavLink} from "react-router-dom"

import axios from "axios";
import React, { useEffect, useState } from "react";

const GetAllProductData = () => {
  useEffect(() => {
    getAllProductData();
  }, []);

  const [product, setproduct] = useState([]);

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

  return (
    <div className="row text-center mt-5">
      <h1>All Stock tData</h1>
      <form action="">
        <div className="col-sm-8 offset-2 mt-2 text-center">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SrNo</th>
                <th scope="col">Name</th>
                <th scope="col">Stock Number</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Total Stock</th>
                <th scope="col" colSpan="3">Action</th>
              </tr>
            </thead>
            <tbody>
            
            </tbody>
            {
              product.map((val,index)=>{
                return(
                  <>
                     <tr>
                <th scope="row">{index+1}</th>
                <td>{val.stockname}</td>
                <td>{val.stockid}</td>
                <td>{val.category}</td>
                <td>{val.price}</td>
                <td>{val.totalstock}</td>
                
                <td>
                  <NavLink to={`/viewproduct/${val._id}`} className="text-dark"><VisibilityIcon/> </NavLink>
                </td>

                <td>
                  <NavLink to={`/deleteproduct/${val._id}`} className="text-danger"><DeleteIcon/> </NavLink>
                </td>
                <td>
                  <NavLink to={`/updateproduct/${val._id}`}><EditIcon/> </NavLink>
                </td>
              </tr>
                  </>
                )
              })
            }
          </table>
        </div>
      </form>
    </div>
  );
};

export default GetAllProductData;
