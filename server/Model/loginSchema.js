const mongoose=require("mongoose")

const loginSchema=new mongoose.Schema({

    fullname:{
        type:String,
        default:"Admin"
    },
    useremail:{
        type:String,
        default:"97zahir97@gmail.com",
    },
    password:{
        type:String,
        default:"default",
    },
    role:{
        type:String,
        default:"admin"
    }

})

module.exports =mongoose.model("logindata",loginSchema)



