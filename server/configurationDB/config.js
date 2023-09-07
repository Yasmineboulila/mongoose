const mongoose=require("mongoose")

const connectDB=async()=>{
  try {
    mongoose.connect("mongodb+srv://rachidmokaddem068:rchid@cluster0.d5zvkte.mongodb.net/")
    console.log("db connected")
  } catch (error) {
    console.log(error)
  }
}
module.exports=connectDB