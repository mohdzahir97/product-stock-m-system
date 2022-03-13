const mongoose=require('mongoose')
const DB=process.env.DB

mongoose.connect(DB)
.then(()=>{
    console.log("Application Connected with MongoDB Database...");
})
.catch((error)=>{
    console.log(error);
})