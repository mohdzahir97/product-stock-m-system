const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    stockname:{
        type:String
    },
    stockid:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    totalstock:{
        type:Number
    }
})


module.exports=mongoose.model("stockcollection",productSchema)