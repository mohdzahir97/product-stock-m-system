const dotenv=require('dotenv')
dotenv.config({path:'./config/config.env'})

const express=require('express')
const app=express()


const port=process.env.PORT

require('./DB/conn')
const router=require("./router/router")


app.use(express.json())
app.use(router)



app.listen(port,()=>{
    console.log(`Server running on port on ${port}`);
})