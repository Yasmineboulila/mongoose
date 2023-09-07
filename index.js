const express=require("express")
const cors=require('cors')
const port=5666
const {posteRouter}=require('./server/routers/posteRouter')
const app=express()

const connectDB=require("./server/configurationDB/config")
app.use(express.json())
connectDB()
app.use(express.json()) 
app.use("/", posteRouter)
app.listen(port,()=>{
    console.log("server run")
})