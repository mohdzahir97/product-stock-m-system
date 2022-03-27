const productModel = require("../Model/stockpro_schema");
const LoginModel=require("../Model/loginSchema");
// const { search } = require("../router/router");



class featureAPI{
  constructor(query,queryString){
    this.query=query,
    this.queryString=queryString
  }

  search() {
    const keyword = this.queryString.keyword
      ? {
        stockname: {
            $regex: this.queryString.keyword,
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  pagination(resultPerPage){

    const currentPage=Number(this.queryString.page)||1;
    console.log(currentPage);
    const skipData=resultPerPage*(currentPage-1)
    this.query=this.query.limit(resultPerPage).skip(skipData)
    return this;

  }

  sortingdata(){
    const sortBy=this.queryString.sorting;
    this.query=this.query.sort(sortBy)
    return this;
  }
}

exports.loginAuth=async(req,res)=>{
  try {
    console.log("loginauth..");
    const {useremail,password}=req.body
    console.log(useremail,password);
    const result =await LoginModel.findOne({useremail,password})
    if (result) {
      console.log("success");
      res.status(201).send({success:true,msg:"Admin Login SuccessFully.."})
    }
    
  } catch (error) {
    console.log(error);
  }
}





exports.getAllData = async (req, res) => {
  try {

    let resultPerPage=1;
    const feature= new featureAPI(productModel.find(),req.query).search().sortingdata().pagination(resultPerPage)
    const exitsData=await feature.query
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
