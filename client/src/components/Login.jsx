import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();

  const [InputData, setInputData] = useState({
    useremail: "",
    password: "",
  });

  const handleInput = (e) => {
    setInputData({ ...InputData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const response = await axios.post("/admin/login", InputData);
    if (response.data.success) {
      Navigate("/getallproduct");
    }
  };

  return (
    <>
      <div className="row  mt-lg-5 text-center">
        <div className="col-sm-6 offset-3">
          <h1>Admin Login</h1>
          <input
            type="text"
            className="form-control text-center"
            placeholder="Enter Your Email"
            onChange={handleInput}
            name="useremail"
            value={InputData.useremail}
          />
        </div>
        <div className="col-sm-6 offset-3 mt-2">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Enter Your Password"
            onChange={handleInput}
            name="password"
            value={InputData.password}
          />
        </div>

        <div className="col-sm-6 offset-3 mt-2">
          <input
            type="submit"
            value="Login"
            className="form-control text-center btn btn-primary"
            onClick={(e) => onSubmit(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
