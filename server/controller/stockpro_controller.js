const productModel = require("../Model/stockpro_schema");

exports.getAllData = async (req, res) => {
  try {
    console.log("get...");
    const exitsData = await productModel.find();
    if (exitsData) {
      res.status(201).json({ success: true, exitsData: exitsData });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    console.log("get2...");
    const id = req.params.id;
    const exitsData = await productModel.findOne({ _id: id });
    if (exitsData) {
      res.status(201).json({ success: true, exitsData: exitsData });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const result = await productModel(req.body.stateProduct);
    const exitsData = await result.save();
    if (exitsData) {
      res
        .status(201)
        .json({ success: true, msg: "Product Data Addedd Successfully..." });
      console.log("hello world...");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateProduct =async (req, res) => {
  try {
    const id = req.params.id;

    const exitsData =await productModel.findByIdAndUpdate({ _id: id }, req.body.stateProduct, {
      new: true,
    });

    if (exitsData) {
        res
          .status(201)
          .json({ success: true, msg: "Product Data Updated Successfully..." });
      }

  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct =async (req, res) => {
    try {
        const id = req.params.id;
    
        const exitsData =await productModel.findByIdAndDelete({ _id: id });
    
        if (exitsData) {
            res
              .status(201)
              .json({ success: true, msg: "Product Data Delted Successfully..." });
          }
    
      } catch (error) {
        console.log(error);
      }
};
