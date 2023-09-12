const express=require("express")
const cors=require('cors')
const port=5667
const {posteRouter}=require('./server/routers/posteRouter')
const {userRouter}=require('./server/routers/userRouter')
const app=express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    optionsSuccessStatus:200
}))
const connectDB=require("./server/configurationDB/config")
app.use(express.json())
connectDB()
app.use(express.json()) 
app.use("/", posteRouter)
app.use("/",userRouter)
app.listen(port,()=>{
    console.log("server run")
})