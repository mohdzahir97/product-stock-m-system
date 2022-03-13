import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetAllProductData from "./components/GetAllProductData";
import AddProduct from "./components/AddProduct";
import DeleteProductData from "./components/DeleteProductData";
import UpdateProductData from "./components/UpdateProductData";
import NavBar from "./components/NavBar";
import ViewStock from "./components/ViewStock";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<AddProduct />}></Route>
        <Route path="/getallproduct" element={<GetAllProductData />}></Route>
        <Route
          path="/deleteproduct/:id"
          element={<DeleteProductData />}
        ></Route>
        <Route
          path="/updateproduct/:id"
          element={<UpdateProductData />}
        ></Route>

        <Route path="/viewproduct/:id" element={<ViewStock />}></Route>
      </Routes>
    </div>
  );
}

export default App;
