const router=require("express").Router()
const userController=require("../controlers/users")
const { isAuth } = require("../middleware/isAuth")
const {registerValidation,validation,loginValidation}=require("../middleware/validator")
 
router.post("/api/createUser",registerValidation,validation,userController.createUser)
router.post("/api/login",loginValidation,validation,userController.login)
router.get("/api/getCurrent",isAuth,(req,res)=>{
    res.send({user:req.user})
})


module.exports={userRouter:router}