const express = require("express");

const {
  getAllData,
  addProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/stockpro_controller");

const router = express.Router();

router.get("/product", getAllData);
router.post("/product", addProduct);

router.get("/product/:id", getSingleProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

module.exports = router;
